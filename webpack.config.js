var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map-inline',
  entry: path.resolve('src/entries/app.js'),
  output: {
    path: path.resolve('build'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve('src'),
        options: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        loader: 'url-loader',
        include: path.resolve('src'),
        options: {
          // Any file with size less than 100kb will be inlined as a base64 data string.
          limit: 102400,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
    })
  ],
}
