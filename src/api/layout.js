import request from '@/utils/request'



/**
 *  /api/user-service/user/:id
 */


export function getDetailUserInfo(id) {
  return request({
    url:`/api/user-service/user/${id}`,
  })
}

