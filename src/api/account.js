import request from '@/utils/request'

export function updateAccount (_id, token, type ) {
    return request({
      url: '/encrypt/updateAccount',
      method: 'post',
      data: {
        _id,
        token,
        type
       }
    })
  }
  export function modifyPwd ( _id, token, oldPwd, newPwd, confirmPwd ) {
    return request({
      url: '/encrypt/modifyPwd',
      method: 'post',
      data: {
        _id,
        token,
        oldPwd,
        newPwd,
        confirmPwd
      }
    })
  }