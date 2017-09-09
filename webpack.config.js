const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'app', 'renderer'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {
              importLoaders: 1,
              modules: true,
              sourceMap: true,
              loaclIdentName: '[name]--[local]--[hash:base64:8]'
            }},
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new ExtractTextPlugin('styles.css')
  ],
  target: 'electron'
};
