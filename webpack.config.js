const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const libName = "react-bootstrap-input";

module.exports = env => {
  const minify = env && env.min;

  const config = {
    entry: './src/index.js',
    output: {
      filename: `${libName}${minify ? '.min' : ''}.js`,
      path: path.resolve(__dirname, 'dist'),
      library: libName,
      libraryTarget: 'umd'
    },
    externals: {
      react: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          loader: 'babel-loader'
        }
      ]
    },
    plugins: []
  };

  if (minify) {
    config.plugins.push(new UglifyJSPlugin());
  }

  return config;
};
