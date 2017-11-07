'use strict'

/**
 * Create a new requirements instance
 *
 * @constructor
 */
function Requirements () {
    this.requirements = []
}

/**
 * Register a new requirement
 *
 * @param {Object} condition
 * @param {Function} callback
 */
Requirements.prototype.on = function on (condition, callback) {
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
Requirements.prototype.forEach = function forEach (callback) {
    this.requirements.forEach(callback)
}

module.exports = Requirements
