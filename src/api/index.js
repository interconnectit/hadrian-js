/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

const axios = require('axios')
const config = require('../api').api

const metrics = require('./metrics')

const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout
})

// TODO: interact with a storage
instance.interceptors.request.use((config) => config)

// TODO: interact with a storage
instance.interceptors.response.use((response) => response)

exports.metrics = metrics(instance)
