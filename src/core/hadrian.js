import jsCookie from 'js-cookie'
import axios from 'axios'
import { each, isEqualWith } from 'lodash'

/**
 * Create a new axios instance
 *
 * @return {AxiosInstance}
 */
function createAxiosInstance () {
    const instance = axios.create({
        baseURL: this.baseUrl,
        timeout: 2000
    })

    // define the interceptors
    instance.interceptors.request.use(axiosRequestInterceptor.bind(this))
    instance.interceptors.response.use(axiosResponseInterceptor.bind(this))

    return instance
}

/**
 * Axios request interceptor
 *
 * @param {AxiosRequestConfig} config
 * @return {AxiosRequestConfig}
 */
function axiosRequestInterceptor (config) {
    // add session to the headers
    if (this.sessionUuid) {
        config.headers['x-session-uuid'] = this.sessionUuid
    }

    return config
}

/**
 * Axios response interceptor
 *
 * @param {AxiosResponse} response
 * @return {AxiosResponse}
 */
function axiosResponseInterceptor (response) {
    const data = response.data

    if (data.session) {
        jsCookie.set('hadrian-session-uuid', data.session.uuid)
    }

    return response
}

function evaluateMetricsResponse ({data}) {
    if (!data.data.trigger) return

    const compareCustomizer = (objValue, othValue) => {
        return othValue === '*'
            ? true
            : undefined
    }

    each(this.triggers, ({condition, callback}) => {
        if (isEqualWith(data.data.trigger, condition, compareCustomizer)) {
            callback(data.data)
        }
    })
}

class Hadrian {
    /**
     * Create a new hadrian instance
     *
     * @param {String} baseUrl
     */
    constructor (baseUrl) {
        this.baseUrl = baseUrl
        this.sessionUuid = jsCookie.get('hadrian-session-uuid')

        this.triggers = []

        this.axios = createAxiosInstance.call(this)
    }

    /**
     * Add a new response trigger
     *
     * @param {Object} condition
     * @param {Function} callback
     * @return {Hadrian}
     */
    on (condition, callback) {
        this.triggers.push({
            condition,
            callback
        })

        return this
    }

    evaluate (payload) {
        this.axios
            .post('metrics', {payload})
            .then(evaluateMetricsResponse.bind(this))
    }
}

export default Hadrian
