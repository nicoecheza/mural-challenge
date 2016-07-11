var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: 'eval',

    entry: [
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './client/index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
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
        preLoaders: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\global.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\local.css/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader'
            ]
        },{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'client')
        }, {
            test: /\.(png|gif|woff|woff2|svg|otf|ttf|eot)$/,
            loader: 'url-loader?limit=15000'
        }, {
            test: /\.(jpg)$/,
            loader: 'file-loader?name=images/[name].[ext]'
        }]
    },

    postcss: [
        require('autoprefixer')
    ]

};
