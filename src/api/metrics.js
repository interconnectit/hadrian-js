/*!
 * hadrian
 * Copyright(c) 2017 interconnect/it
 * MIT Licensed
 */

'use strict'

module.exports = (axios) => {
    const api = {}

    api.evaluate = (data) => axios({
        method: 'post',
        url: 'metrics',
        data
    })

    return api
}
