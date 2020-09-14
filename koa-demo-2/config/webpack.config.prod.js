const webpackMerge = require("webpack-merge")
const baseWebpackConfig = require('./webpack.config.base')
// 压缩js代码
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        warnings: false,
        compress: {
          warnings: false,
          // 是否注释console
          drop_console: false,
          dead_code: true,
          drop_debugger: true
        },
        output: {
          comments: false,
          beautify: false
        },
        mangle: true
      },
      parallel: true,
      sourceMap: false
    })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 3,
          enforce: true
        }
      }
    }
  },
  stats: { children: false, warnings: false }
})

module.exports = webpackConfig