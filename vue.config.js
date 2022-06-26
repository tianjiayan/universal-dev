// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  devServer: {
    port: 8080, //端口号
    host: 'localhost', //主机名
    https: false,
    open: true,
    // 配置跨域
    proxy: {
      // 代理名称
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        //代理路径重写
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  //关闭代码eslint质量检测
  lintOnSave: false
}
