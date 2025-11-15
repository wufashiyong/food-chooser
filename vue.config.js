// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  transpileDependencies: true,
    devServer: {
    host: '0.0.0.0',    // 这个只影响本地开发
    port: 8080
  },
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/food-chooser/'  // 重要：改成你的仓库名
    : '/'
})