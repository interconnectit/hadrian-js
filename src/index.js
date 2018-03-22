import Hadrian from './core/hadrian'

/**
 * Create a new hadrian instance
 *
 * @param {String} axiosOptions
 * @return {Hadrian}
 */
function factory (axiosOptions = {}) {
    return new Hadrian(axiosOptions)
}

module.exports = factory
