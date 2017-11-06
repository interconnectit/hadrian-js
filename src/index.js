/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

const api = require('./api')
const config = require('./config')

const hadrian = {}

hadrian.api = api
hadrian.config = config

module.exports = hadrian
