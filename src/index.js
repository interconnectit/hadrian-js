import Hadrian from './core/hadrian'

/**
 * Create a new hadrian instance
 *
 * @param {String} siteUuid
 * @return {Hadrian}
 */
function factory (siteUuid) {
    return new Hadrian(siteUuid)
}

module.exports = factory
