const path = require('path');
module.exports = {// add babel polyfill to run most new code on js
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
        use:['style-loader','css-loader', 'sass-loader']
     }
    ]
  }
};// yarn add @babel/env @babel/react @babel/preset-react