const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const dotenv = require('dotenv')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  output: {
    publicPath: '/fizz-cult-app/',
  },
})
