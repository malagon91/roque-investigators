const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  resolve: {
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: ['babel-polyfill','./lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader' 
      },
      {
        test:/\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader","sass-loader"]
      })
     }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css')
]
};