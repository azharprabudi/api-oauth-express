var WebpackDevServer= require('webpack-dev-server');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config.js');

// compiler webpack
var compiler = webpack(config);
// konfigurasi webpack-dev-server
var server = new WebpackDevServer(compiler, {
    hot: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});

server.listen(3000, 'localhost', function() {});

