const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/lib/index.ts',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-notifications.min.js',
    library: 'reactNotifications',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              cacheDirectory: true,
              plugins: ['@babel/plugin-proposal-optional-chaining']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.prod.json'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate files
          {
            // Translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {
            // Compiles Sass to CSS
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // new ESLintPlugin({ emitError: true, emitWarning: true, outputReport: true, files: 'src/**' }),
    new MiniCssExtractPlugin({
      filename: 'react-notifications.css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  }
}
