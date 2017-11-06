'use strict'

const path = require('path')
const webpack = require('webpack')

const config = []

function generateConfig (filename) {
    const config = {}

    config.entry = './src/index.js'

    config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename,
        library: 'hadrian',
        libraryTarget: 'umd'
    }

    config.devtool = 'source-map'

    config.plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]

    if (filename.includes('min')) {
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            })
        )
    }

    return config
}

['hadrian.js', 'hadrian.min.js'].forEach((filename) => {
    config.push(generateConfig(filename))
})

module.exports = config
