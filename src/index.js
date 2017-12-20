import Hadrian from './core/hadrian'

/**
 * Create a new hadrian instance
 *
 * @param {String} baseUrl
 * @return {Hadrian}
 */
function factory (baseUrl) {
    return new Hadrian(baseUrl)
}

module.exports = factory
