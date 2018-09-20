import request from '@/utils/request'

export function updateAccount (_id, token, dataObj ) {
    console.log(dataObj)
    return request({
      url: '/encrypt/updateAccount',
      method: 'post',
      data: {
        _id,
        token,
        dataObj
       }
    })
  }
  export function modifyPwd ( _id, token, dataObj ) {
    return request({
      url: '/encrypt/modifyPwd',
      method: 'post',
      data: {
        _id,
        token,
        dataObj
      }
    })
  }