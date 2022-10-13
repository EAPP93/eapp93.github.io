const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /(\.css|\.scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    })
  ]
}

module.exports = merge(common, prodConfig)
