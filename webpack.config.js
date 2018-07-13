const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/docs/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'react-bootstrap-input': path.resolve(__dirname, 'src/index'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/docs/index.html')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  }
}
