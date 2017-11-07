'use strict'

var axios = require('axios')

/**
 * Create a new api instance
 *
 * @param {Object} config
 * @constructor
 */
function Api (config) {
    this.axios = axios.create({
        baseURL: config.baseUrl,
        timeout: config.timeout
    })

    // TODO: interact with a storage
    this.axios.interceptors.request.use(function (config) {
        return config
    })

    // TODO: interact with a storage
    this.axios.interceptors.response.use(function (response) {
        return response
    })
}

/**
 * Dispatch the evaluate metrics request
 *
 * @param {Object} data
 * @return {Promise}
 */
Api.prototype.evaluateMetrics = function evaluateMetrics (data) {
    return this.axios({
        method: 'post',
        url: 'metrics',
        data: data
    })
}

module.exports = Api
