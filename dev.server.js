var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {

	publicPath: config.output.publicPath,
    contentBase: './client/',
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true,
		reasons: true
	}

}).listen(8000, 'localhost', function (err, result) {

	if (err) {
		return console.log(err);
	}

  	console.log('Listening at http://localhost:8000/');

});
