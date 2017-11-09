'use strict'

const _merge = require('lodash').merge
const Hadrian = require('./core/hadrian')
const defaults = require('./defaults')

function bootstrap (site, config) {
    return new Hadrian(site, _merge(defaults, config || {}))
}

module.exports = bootstrap
