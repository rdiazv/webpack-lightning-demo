var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map-inline',
  entry: {
    app: path.resolve('src/entries/app.js'),
    landing: path.resolve('src/entries/landing.js'),
    vendors: [
      'react',
      'react-dom',
    ]
  },
  output: {
    path: path.resolve('build'),

    // [name] corresponds to the key of each entry. In this case `app` and `landing`.
    filename: '[name].js',
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
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      chunks: ['app', 'vendors'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      chunks: ['landing', 'vendors'],
      filename: 'landing.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
    }),
  ],
}
