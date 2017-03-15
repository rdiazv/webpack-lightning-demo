var path = require('path')

module.exports = {
  entry: path.resolve('src/entries/app.js'),
  output: {
    path: path.resolve('build'),
    filename: 'app.js',
  },
}
