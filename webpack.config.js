const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.config.base.js');

module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};
