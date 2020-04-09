const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "詹杰",
            template: "./src/asset/index.html"
        }),
    ]
};
