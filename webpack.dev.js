const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/dev/index.tsx',

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss']
  },

  module: {
    rules: [
      {        
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              cacheDirectory: true,
              plugins: ['@babel/plugin-proposal-optional-chaining']
            }
          }
        ],
        include: /src/
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: /src/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [          
          "style-loader", // Creates `style` nodes from JS strings          
          {
            // Translates CSS into CommonJS          
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true
            }
          }, 
          "sass-loader", // Compiles Sass to CSS
        ],
        include: /src/
      }
    ]
  },

  plugins: [
    new ESLintPlugin({ emitError: true, emitWarning: true, outputReport: true, files: 'src/**' }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/dev/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
