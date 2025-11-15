// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
    devServer: {
    https: true  // 开发环境也强制HTTPS
  },
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/food-chooser/'  // 重要：改成你的仓库名
    : '/'
})