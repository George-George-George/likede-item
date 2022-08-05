// /api/task-service/task/search


import request from '@/utils/request'



/**
 *  /api/user-service/user/:id
 */


export function getItemList() {
    return request({
        url: '/api/task-service/task/search',
    })
}
