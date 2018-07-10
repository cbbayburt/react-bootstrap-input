const merge = require('webpack-merge');
const common = require('./webpack.docs.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.'
    },
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            beautify: false
          }
        },
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      })
    ]
  }
});
