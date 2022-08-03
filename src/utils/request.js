import axios from 'axios'
import { Message } from 'element-ui';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use() // 请求拦截器
service.interceptors.response.use(
  service.interceptors.response.use((response)=>{
    const {success,message,data} = response.data
    if(success){
        return data
    }
    Message.error(message)
    return Promise.reject(new Error(message))
},function(error){
    Message.error('系统异常')
    Promise.reject(error)
}) // 响应拦截器
) // 响应拦截器
export default service // 导出axios实例
