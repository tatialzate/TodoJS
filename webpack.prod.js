const HtmlWebPack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const Copy           = require("copy-webpack-plugin");
const CssMinimizer   = require("css-minimizer-webpack-plugin");
const Terser         = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: "index.[fullhash].js"
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
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser(),
        ]
    },
    plugins: [
        new HtmlWebPack ({
            title: 'Mi Webpack',
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtract ({
            filename: 'styles.[fullhash].css',
            ignoreOrder: false,
        }),
        new Copy ({
            patterns:[
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]
}