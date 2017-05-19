module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle/index.js',
  },
  devServer: {
    port: 4000,
  },
  devtool: '#eval-source-map',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css$/,
        loader: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
