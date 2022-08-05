import store from '@/store';
import axios from 'axios'
import { Message } from 'element-ui';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use((config) => {
  if (store.state.user.realToken) {
    config.headers.Authorization = store.state.user.realToken
  }
  return config
}) // 请求拦截器
service.interceptors.response.use(
) // 响应拦截器
export default service // 导出axios实例
