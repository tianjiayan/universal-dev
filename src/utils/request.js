import axios from 'axios'

import md5 from 'md5'

import loading from './loading'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
  // headers: {'X-Custom-Header': 'foobar'}
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    //打开loading加载
    loading.open()
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    //   将token通过请求头发送给后台
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = token
    // }

    return config
  },
  function (error) {
    //关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    loading.close()
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

//统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() == 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

// 获取icode、
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

// // 处理get请求方式的参数问题
// function request(options) {
//   options.method = options.method || 'get'
//   if (options.method.toLowerCase() === 'get') {
//     options.params = options.data
//   }
//   return instance(options)
// }

export default request
