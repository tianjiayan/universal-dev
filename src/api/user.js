import request from '../utils/request'
// 登录接口
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}
const getUserInfo = () => {
  return request({ url: '/sys/profile', method: 'GET' })
}

export default {
  login,
  getUserInfo
}
