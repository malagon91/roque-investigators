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
     }, { //imagenes
       test: /\.jpg|png|gif|svg$/,
       use: {
         loader: 'url-loader',
         options: { // cuando la imagen pese mas de 10k lo va a enviar con el file loader
           limit: 10000,
           fallback: 'file-loader',
           name: 'images/[name].[ext]'
         }
       }
     }]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css')
]
};