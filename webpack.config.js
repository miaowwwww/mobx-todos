var webpack = require('webpack');
var path = require('path');
module.exports = {
  plugins:[
    new webpack.HotModuleReplacementPlugin({
    })

  ],
  entry:['webpack/hot/dev-server', path.resolve(__dirname, './app/index.js')],
  output:{
    path:path.resolve(__dirname,'./build'),
    filename:'index.js'
  },
  module:{
    loaders:[
      {test:/\.js$/,loader:'jsx-loader'},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      }, 
      {test: /\.(png|jpg)$/, loader: 'url?limit=40000'},
      {test:/\.less$/,loader:'style!css!less'},
      {test:/\.css$/,loader:'style!css'}
    ]
  }
}