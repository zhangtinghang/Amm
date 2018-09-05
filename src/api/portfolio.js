import request from '@/utils/request'

export function getList(id, preNum, nextNum, limit, token, category) {
    return request({
      url: '/encrypt/portfolio',
      method: 'get',
      params: { id, preNum, nextNum, limit, token, category }
    })
  }