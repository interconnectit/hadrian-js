/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

module.exports = function metrics (axios) {
    var api = {}

    api.evaluate = function evaluate (data) {
        return axios({
            method: 'post',
            url: 'metrics',
            data: data
        })
    }

    return api
}
