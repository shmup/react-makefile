const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const {execSync} = require('child_process');

const gitRev = execSync('git rev-parse HEAD').toString();
const gitMessageShort = execSync('git log -1 --pretty=%s').toString();
const gitMessageFull = execSync('git log -1 --pretty=%B').toString();
const gitDate = execSync('git log -1 --format=%cd ').toString();

var config = {
  entry: ['./src/index.js', './src/index.scss'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  devtool: 'sourceMap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
	use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        })),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      GIT_COMMIT_REV: JSON.stringify(gitRev),
      GIT_COMMIT_MESSAGE: JSON.stringify(gitMessageShort),
      GIT_COMMIT_MESSAGE_FULL: JSON.stringify(gitMessageFull),
      GIT_COMMIT_DATE: JSON.stringify(gitDate),
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
  ],
};

module.exports = config;
