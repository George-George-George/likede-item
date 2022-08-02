import request from '@/utils/request'

export function login(data) {
  return request({
    url:'/api/user-service/user/login',
    method: 'POST',
    data
  })
}

// 获取验证码
export function getCode(clientToken) {
  return request({
    url:`/api/user-service/user/imageCode/${clientToken}`,
    responseType: "arraybuffer",
  })
}
