/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

var axios = require('axios')

/**
 * Create a new api manager instance
 *
 * @param {Object} config
 * @constructor
 */
function ApiManager (config) {
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
ApiManager.prototype.evaluateMetrics = function evaluateMetrics (data) {
    return axios({
        method: 'post',
        url: 'metrics',
        data: data
    })
}

module.exports = ApiManager
