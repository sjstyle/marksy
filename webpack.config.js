var path = require('path');

var sourcePath = path.resolve('src', 'index.js');
var appPath = path.resolve('app', 'main.js');

module.exports = {
  entry: appPath,
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'marksy': sourcePath
    }
  },
  module: {
    loaders: [{
      test: /\.js/,
      use: [{
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('babel-preset-react')
          ]
        }
      }]
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};
