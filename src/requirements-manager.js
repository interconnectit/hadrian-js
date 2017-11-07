/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

/**
 * Create a new requirements manager instance
 *
 * @constructor
 */
function RequirementsManager () {
    this.requirements = []
}

/**
 * Register a new requirement
 *
 * @param {Object} condition
 * @param {Function} callback
 */
RequirementsManager.prototype.on = function on (condition, callback) {
    this.requirements.push({
        condition: condition,
        callback: callback
    })
}

/**
 * Iterate over all the registered requirements
 *
 * @param {Function} callback
 */
RequirementsManager.prototype.forEach = function forEach (callback) {
    this.requirements.forEach(callback)
}

module.exports = RequirementsManager
