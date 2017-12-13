import jsCookie from 'js-cookie'
import axios from 'axios'
import { defaults, each, isEqualWith } from 'lodash'

/**
 * Create a new axios instance
 *
 * @param {Object} options
 *
 * @return {AxiosInstance}
 */
function createAxiosInstance (options) {
    const instance = axios.create(defaults(options, {
        baseURL: 'https://api.hadrianpaywall.com',
        timeout: 2000
    }))

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
    config.headers['x-site-uuid'] = this.siteUuid

    if (this.sessionUuid) {
        config.headers['x-session-uuid'] = this.sessionUuid
    }

    if (this.subscriberUuid) {
        config.headers['x-subscriber-uuid'] = this.subscriberUuid
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

    if (data.subscriber) {
        jsCookie.set('hadrian-subscriber-uuid', data.subscriber.uuid)
    }

    return response
}

function evaluateMetricsResponse ({data}) {
    const compareCustomizer = (objValue, othValue) => {
        return othValue === '*'
            ? true
            : undefined
    }

    each(this.triggers, ({response, callback}) => {
        if (isEqualWith(data, response, compareCustomizer)) {
            callback(data)
        }
    })
}

class Hadrian {
    /**
     * Create a new hadrian instance
     *
     * @param {String} siteUuid
     * @param {Object} axiosOptions
     */
    constructor (siteUuid, axiosOptions) {
        // define uuids
        this.siteUuid = siteUuid
        this.sessionUuid = jsCookie.get('hadrian-session-uuid')
        this.subscriberUuid = jsCookie.get('hadrian-subscriber-uuid')

        this.triggers = []

        this.axios = createAxiosInstance.call(this, axiosOptions)
    }

    /**
     * Add a new response trigger
     *
     * @param {Object} response
     * @param {Function} callback
     * @return {Hadrian}
     */
    on (response, callback) {
        this.triggers.push({
            response,
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
