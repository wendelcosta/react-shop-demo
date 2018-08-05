// Basic webpack config

const HTMLWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HTMLWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      // babel-loader to process JS files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // style loaders
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            // css-loader to enable CSS Modules and other features
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      // file-loader for handling image file types
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {}
      }
    ]
  },
  plugins: [
    htmlPlugin
  ]
};