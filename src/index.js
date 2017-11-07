'use strict'

const _merge = require('lodash').merge
const Hadrian = require('./core/hadrian')
const defaults = require('./defaults')

var hadrian = {}

// Expose Hadrian class
hadrian.Hadrian = Hadrian

// Factory for creating new instances
hadrian.create = function create (config) {
    return new Hadrian(_merge(defaults, config))
}

module.exports = hadrian
