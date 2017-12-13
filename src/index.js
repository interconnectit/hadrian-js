import Hadrian from './core/hadrian'

/**
 * Create a new hadrian instance
 *
 * @param {String} siteUuid
 * @param {String} axiosOptions
 * @return {Hadrian}
 */
function factory (siteUuid, axiosOptions = {}) {
    return new Hadrian(siteUuid, axiosOptions)
}

module.exports = factory
