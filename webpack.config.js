'use strict'

var path = require('path')
var webpack = require('webpack')

var config = []

function generateConfig (filename) {
    var isMinified = filename.indexOf('min') > -1

    var config = {}

    config.entry = './src/index.js'

    config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: filename,
        library: 'hadrian',
        libraryTarget: 'umd'
    }

    config.devtool = isMinified
        ? false
        : 'source-map'

    config.module = {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    }

    return config
}

['hadrian.js', 'hadrian.min.js'].forEach(function (filename) {
    config.push(generateConfig(filename))
})

module.exports = config
module.exports = {
    mode: 'production'
}
