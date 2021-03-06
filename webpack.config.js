const path = require('path')

module.exports = {
  entry: "./lib/entry.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/assets/'
  },
  devtool: 'source-map',
  mode: 'development'
};
