import request from '@/utils/request'

export function getList(id, preNum, nextNum, limit, token) {
    return request({
      url: '/encrypt/getDown',
      method: 'get',
      params: { id, preNum, nextNum, limit, token }
    })
  }