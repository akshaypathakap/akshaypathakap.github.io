const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: 'C:\Users\DEVA\Downloads\Compressed\votingdapptut-master\votingdapptut-master\index.html', to: "index.html" }
    ])
  ],

  devserver: {
    port: process.env.PORT || 30,
    host: '35.154.57.5',
    disableHostCheck: true
    },
    resolve: {
      extensions: [ '.js', '.jsx']
  },
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
