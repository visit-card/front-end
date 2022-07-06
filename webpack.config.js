const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {test: /\.svg$/, use: [{loader: 'babel-loader'}, {loader: 'react-svg-loader', options: {jsx: true}}]},
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.png|gif|jpg$/, loader: 'url-loader', exclude: /node_modules/ }
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['public'] }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico',
            inject: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/pwa', to: './' }
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}