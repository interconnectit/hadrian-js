import axios from 'axios'
import { defaults, each, isEqualWith } from 'lodash'
import Cookies from 'js-cookie'

/**
 * The cookie name.
 *
 * @type {string}
 */
const COOKIE_NAME = '__hsi'

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
        timeout: 2000,
        withCredentials: true
    }))

    instance.interceptors.request.use(request => {
        const sessionId = Cookies.get(COOKIE_NAME)

        if (sessionId) {
            request.headers.common['x-session-id'] = sessionId
        }

        return request
    })

    instance.interceptors.response.use(response => {
        const sessionId = response.data.data.session_id

        if (sessionId) {
            Cookies.set(COOKIE_NAME, sessionId)
        }

        return response
    })

    return instance
}

/**
 * Evaluate the metering response.
 *
 * @param {Object} data
 */
function evaluateMeteringResponse ({data}) {
    if (!data.data.evaluation.trigger) return

    const compareCustomizer = (objValue, othValue) => {
        return othValue === '*'
            ? true
            : undefined
    }

    each(this.triggers, ({condition, callback}) => {
        if (isEqualWith(data.data.evaluation.trigger, condition, compareCustomizer)) {
            callback(data.data)
        }
    })
}

class Hadrian {
    /**
     * Create a new hadrian instance
     *
     * @param {Object} axiosOptions
     */
    constructor (axiosOptions = {}) {
        this.triggers = []

        this.axios = createAxiosInstance.call(this, axiosOptions)
    }

    /**
     * Add a new response trigger
     *
     * @param {Object} condition
     * @param {Function} callback
     *
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
            .post('views', {payload})
            .then(evaluateMeteringResponse.bind(this))
    }
}

export default Hadrian
