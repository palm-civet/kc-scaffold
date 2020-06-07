const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const allWorkspace = [
  path.resolve(__dirname, '../common'),
  path.resolve(__dirname, '../editor'),
  path.resolve(__dirname, '../platform'),
]

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
  devtool: devMode ? 'eval-cheap-module-source-map' : 'none',
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
        // include: allWorkspace,
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
        use: [
          {
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
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
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
    compress: true,
    hot: true,
    port: 9000
  }
}