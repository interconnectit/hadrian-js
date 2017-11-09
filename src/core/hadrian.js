'use strict'

const Api = require('./api')

/**
 * Create a new hadrian instance
 *
 * @param {string} site
 * @param {Object} config
 * @constructor
 */
function Hadrian (site, config) {
    this.site = site
    this.config = config

    this.api = new Api(config.api)
}

Hadrian.prototype.evaluate = function evaluate (payload) {
    this.api.evaluateMetrics(payload)
}

module.exports = Hadrian
