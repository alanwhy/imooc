// 合并webpack配置
const webpackMerge = require("webpack-merge")

const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = webpackMerge(baseWebpackConfig, {
  devtool: "eval-source-map",
  mode: 'development',
  stats: { children: false } // 日志消息不用传递
})
module.exports = webpackConfig