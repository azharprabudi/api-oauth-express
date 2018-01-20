var path = require('path');
var webpack = require('webpack');
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION 
    ?   [ './src/index.js' ]
    :   [
            './src/index.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:3000'
        ];

var plugins = PRODUCTION
    ?   []
    :   [
            new webpack.HotModuleReplacementPlugin()
        ]

module.exports =  {
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node-modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build/'),
        publicPath: '/build/', //agar bisa di akses ketika live di vps / hosting
        filename: 'bundle.js'
    },
    devtool: 'source-map'
};