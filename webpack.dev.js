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
        exclude: /node_modules/,
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
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: ['eslint-loader'],
        include: /samples/
      }
      // {
      //   test: /\.(css|scss)$/,
      //   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['file-loader']
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: ['file-loader']
      // }
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
