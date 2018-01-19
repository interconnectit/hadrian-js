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
        timeout: 2000,
        withCredentials: true
    }))

    return instance
}

function evaluateMetricsResponse ({data}) {
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
            .then(evaluateMetricsResponse.bind(this))
    }
}

export default Hadrian
