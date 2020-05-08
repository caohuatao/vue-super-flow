/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 11:27
 */

const {resolve} = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: resolve(__dirname, './index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    chunkFilename: '[id].js',
    library: 'SuperFlow',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
  ]
}
