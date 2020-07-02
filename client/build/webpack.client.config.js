const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const allWorkspace = [
  path.resolve(__dirname, '../common'),
  path.resolve(__dirname, '../editor'),
  path.resolve(__dirname, '../platform'),
  path.resolve(__dirname, '../index.tsx')
]
const excludePath = path.resolve(__dirname, '../node_modules')

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import'
      // '@babel/plugin-proposal-optional-chaining'
    ]
  }
}

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './index.tsx',
  devtool: devMode ? 'eval-source-map' : 'none',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: devMode ? '[name].js' : '[name].[chunkhash].js',
    publicPath: devMode ? '/dist/' : '/assets/',
    chunkFilename: devMode ? '[id].chunk.js' : '[chunkhash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        include: allWorkspace,
        // exclude: excludePath,
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /.jsx?$/,
        include: allWorkspace,
        use: babelLoader
      },
      {
        test: /\.css$/i,
        exclude: excludePath,
        use: [
          devMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: { auto: true },
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
                require('postcss-import'),
                require('postcss-url'),
                require('postcss-preset-env')({
                  browsers: 'last 2 versions',
                  stage: 0,
                }),
              ]
            }
          }
        ]
      },
      {
        test: /.css$/i,
        include: excludePath,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        exclude: excludePath,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css'
    }),
    new HtmlWebpackPlugin({
      minify: false,
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@platform": path.resolve(__dirname, '../platform'),
      "@editor": path.resolve(__dirname, '../editor'),
      "@common": path.resolve(__dirname, '../common')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    index: 'index.html',
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/dist/index.html' }
      ]
    },
    compress: true,
    hot: true,
    port: 9000
  }
}