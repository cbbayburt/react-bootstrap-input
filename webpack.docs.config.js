const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const config = {
    entry: './src/docs/index.js',
    output: {
      filename: 'docs.bundle.js',
      path: path.resolve(__dirname, 'docs')
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          loader: 'babel-loader'
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
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/docs/index.html'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ]
  };

  return config;
};
