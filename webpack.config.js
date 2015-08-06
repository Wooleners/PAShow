var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var pkg = require('./package');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://172.18.18.141:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/index.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    library: 'antd',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
        )
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!' + 'autoprefixer-loader'
        )
      }, {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'jsx?harmony', 'babel'],
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map'
};
