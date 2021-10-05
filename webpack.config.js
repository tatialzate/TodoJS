const HtmlWebPack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const Copy           = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false
                },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebPack ({
            title: 'Mi Webpack',
            template: './src/index.html',
            //filename: 'index.html'
        }),
        new MiniCssExtract ({
            filename: '[name].css',
            ignoreOrder: false,
        }),
        new Copy ({
            patterns:[
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}