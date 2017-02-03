module.exports = {
  entry: './src/Timeline.jsx',
  output: {
    path: './dist/',
    filename: 'Timeline.js',
  },
  module: {
    loaders: [
      { test: /\.jsx/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
