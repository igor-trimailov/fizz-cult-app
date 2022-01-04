const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

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
})
