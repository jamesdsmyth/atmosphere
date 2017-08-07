/*
    ./webpack.config.js
*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /(\.css|\.scss)$/,
      use: [
        {
          loader: 'style-loader' // creates style nodes from JS strings
        }, 
        {
          loader: 'css-loader?sourceMap' // translates CSS into CommonJS
        }, 
        {
          loader: 'sass-loader?sourceMap' // compiles Sass to CSS
        }
      ]
    },
    { test: /\.js$/, 
      loader: 'babel-loader', 
      exclude: '/node_modules/' 
    }
  ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass
  ]
}