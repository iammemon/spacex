const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const OfflinePlugin=require('offline-plugin');
const path = require('path');

let pathsToClean = __dirname + '/dist';

const config = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new CopyWebpackPlugin([
            {from:'./public'}
        ]),
        new webpack.optimize.UglifyJsPlugin(),
        new OfflinePlugin()
    ]
}

module.exports = config;