/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

const config = {}

config.baseUrl = process.env.HADRIAN_API_BASE_URL || ''
config.timeout = process.env.HADRIAN_API_TIMEOUT || 3000

module.exports = config
