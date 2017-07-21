let webpack = require('webpack');
let autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: __dirname + '/dist/'
  },
  module:{
    rules: [
      {
        enforce: 'pre',
        test: /\.(css|s[ac]ss)$/,
        use: [{
                loader: 'style-loader' 
              }, {
                loader: 'css-loader'
              }, {
                loader: 'postcss-loader',
                options: {
                  plugins: (loader) => [
                    require('autoprefixer'),
                  ]
                }
              }, {
                loader: 'sass-loader'
              }]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          failOnError: false,
          failOnWarning: false,
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
              loader: 'babel-loader',
              options: {
                  presets: ['env']
              }
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader:'url-loader',
            options: {
              limit: 20000
            } 
          },
          {
            loader: 'image-webpack-loader',
            // query: {
            //   progressive: true,
            //   optimizationLevel: 7,
            //   interlaced: false,
            //   pngquant: {
            //     quality: '65-90',
            //     speed: 4
            //   }
            // }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
    comments: false,
    minimize: true,
    compress: {
      warnings: false
    }
  })],
  devServer: {
    inline:true,
    port: 3000
  }
}