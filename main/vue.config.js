const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
    lintOnSave: isProduction,
    devServer: {
        hot: true,
        disableHostCheck: true,
        port: 9527,
        overlay: {
            warnings: false,
            errors: true
        }, 
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
}