import request from '@/utils/request'

export function loginByUsername(number, password, isTourist, userInfo) {
  let tourist = isTourist || null;
  return request({
    url: '/public/login',
    method: 'post',
    data: {
      number,
      password,
      tourist,
      userInfo
    }
  })
}

export function loginByTourist( number, intro ) {
  return request({
    url: '/public/touristLogin',
    method: 'post',
    data: {
      number,
      intro
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function register(username, number, password, operator) {
  return request({
    url: '/public/register',
    method: 'post',
    data: {
      username,
      number,
      password,
      operator
    }
  })
}

export function getUserInfo(token) {
  return request({
    url: '/encrypt/getUserInfo',
    method: 'get',
    params: { token }
  })
}

