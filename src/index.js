/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

var api = require('./api')
var config = require('./config')

var hadrian = {}

hadrian.api = api
hadrian.config = config

module.exports = hadrian
