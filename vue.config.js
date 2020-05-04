module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        https: false,
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/',
                }
            },
        }
    }
}