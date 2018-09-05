import request from '@/utils/request'

export function getList(id, preNum, nextNum, limit, token, category) {
    return request({
      url: '/encrypt/blog',
      method: 'get',
      params: { id, preNum, nextNum, limit, token, category }
    })
  }