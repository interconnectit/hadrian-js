'use strict'

const Api = require('./api')
const Requirements = require('./requirements')

/**
 * Create a new hadrian instance
 *
 * @param {Object} config
 * @constructor
 */
function Hadrian (config) {
    this.config = config

    this.api = new Api(config.api)
    this.requirements = new Requirements()
}

module.exports = Hadrian
