
const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'translate.bundle.js'
    },
    devServer: {
        watchFiles: ['app/**/*.html'],
        static: {
            directory: path.join(__dirname, 'app')
        },
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:[
                    'style-loader',
                    { loader: 'css-loader', options: { url: true}},
                    { loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}
                ]
            }
        ]
    }
}