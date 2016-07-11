'use strict';
/*
* Webpack distribution configuration
*
* This file is set up for serving the distribution version. It will be compiled to dist/ by default
*/
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {

    output: {
        publicPath: '/static/',
        path: 'dist/static/',
        filename: 'bundle.js'
    },

    debug: false,
    devtool: false,
    entry: './client/index.js',

    stats: {
        colors: true,
        reasons: false
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: false, compress: false }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': '"production"' }
        })
    ],

    resolve: {
        extensions: ['', '.js'],
        alias: {
            'actions': __dirname + '/client/actions/',
            'components': __dirname + '/client/components/',
            'containers': __dirname + '/client/containers/',
            'images': __dirname + '/client/images/',
            'reducers': __dirname + '/client/reducers/',
            'services': __dirname + '/client/services/',
            'styles': __dirname + '/client/styles',
            'types': __dirname + '/client/types/',
            'utils': __dirname + '/client/utils/',
            'schemas': __dirname + '/client/schemas/'
        }
    },

    module: {
        loaders: [{
            test: /\global.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\local.css/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        }, {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'client')
        }, {
            test: /\.(png|gif|woff|woff2|svg|otf|ttf|eot)$/,
            exclude: [node_modules_dir],
            loader: 'url-loader?limit=15000'
        }, {
            test: /\.(jpg)$/,
            exclude: [node_modules_dir],
            loader: 'file-loader?name=images/[name].[ext]'
        }]
    },
    postcss: [
        require('autoprefixer')
    ]
};
