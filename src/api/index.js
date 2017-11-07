/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

var axios = require('axios')
var config = require('../api').api

var metrics = require('./metrics')

var instance = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout
})

// TODO: interact with a storage
instance.interceptors.request.use(function (config) {
    return config
})

// TODO: interact with a storage
instance.interceptors.response.use(function (response) {
    return response
})

exports.metrics = metrics(instance)
