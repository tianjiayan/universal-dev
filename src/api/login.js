import request from "../utils/request";
// 登录接口
const loginInterface = (data)=>{
    return request({
        url:"/sys/login",methods:"POST",data
    })
}
export default{
    loginInterface
}