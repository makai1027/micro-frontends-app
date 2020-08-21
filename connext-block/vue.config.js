const path = require('path')
const { name } = require('./package.json')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const port = 9529
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
    publicPath: isProduction ? '/' : `//localhost:${port}`,
    lintOnSave: isProduction,
    devServer: {
        hot: true,
        disableHostCheck: true,
        port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJson_${name}`
        }
    }
}