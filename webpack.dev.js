const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const dotenv = require('dotenv')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    compress: false,
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config({ path: '.env_dev' }).parsed),
    }),
  ],
})
