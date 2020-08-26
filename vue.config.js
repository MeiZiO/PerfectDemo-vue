
// 修复chainWebpack中config.resolve.alias报错
const path = require('path')
const webpack = require('webpack')
function resolve(dir){
  return path.join(__dirname, dir)
}

// 网关地址
const httpType = 'http://'
const proxyUrl = '192.168.137.1:8080'


module.exports = {
  devServer: {
    hot: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: httpType + proxyUrl,
        changeOrigin: true
      },
      '/messageService': {
        target: 'ws://' + proxyUrl,
        changeOrigin: true,
        ws: true
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('page', resolve('src/page'))
  }
}

