var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve('src/entries/app.js'),
  output: {
    path: path.resolve('build'),
    filename: 'app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
    })
  ],
}
