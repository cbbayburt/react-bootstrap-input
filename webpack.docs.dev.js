const merge = require('webpack-merge');
const common = require('./webpack.docs.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080
  }
});
