/**
 * User: CHT
 * Date: 2020/5/13
 * Time: 9:08
 */

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    output: {
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'SuperFrom',
      umdNamedDefine: true
    }
  },
}
