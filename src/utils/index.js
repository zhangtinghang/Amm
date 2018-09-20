/**
 * Created by jiachenpan on 16/11/18.
 */

export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  }
  
  export function formatTime(time, option) {
    time = +time * 1000
    const d = new Date(time)
    const now = Date.now()
  
    const diff = (now - d) / 1000
  
    if (diff < 30) {
      return '刚刚'
    } else if (diff < 3600) { // less 1 hour
      return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
      return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
      return '1天前'
    }
    if (option) {
      return parseTime(time, option)
    } else {
      return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
    }
  }

  export function seleSwitch(value) {
    switch (value) {
      case 0:
      value = 'Android / 安卓开发'
      break;
    case 1:
      value = 'Web / Web前端开发'
      break;
    case 2:
      value = 'python / python开发'
      break;
    case 3:
      value = 'Games / 游戏开发'
      break;
    case 4:
      value = 'UI / UI设计'
      break;
    case 5:
      value = 'Other / 其他'
      break;
    default:
      value = 'Unknown / 未知'
      break;
    }
    return value;
  }

  export function typeToCode(value) {
    switch (value) {
      case 'Android / 安卓开发':
      value = 0;
      break;
    case 'Web / Web前端开发':
      value = 1
      break;
    case 'Python / Python开发':
      value = 2
      break;
    case 'Games / 游戏开发':
      value = 3
      break;
    case 'UI / UI设计':
      value = 4
      break;
    case 'Other / 其他':
      value = 5
      break;
    default:
      value = 6
      break;
    }
    return value;
  }
  
export  function payload (roles){
    let tem = null;
    if(roles.indexOf('admin') >= 0){
        tem = '超级管理员';
    }else if(roles.indexOf('edit') >= 0){
        tem = '管理员';
    }else if(roles.indexOf('normal') >= 0){
        tem = '普通用户';
    }else if(roles.indexOf('tourist') >= 0){
        tem = '游客';
    }else {
        tem = '无权限';
    }
    return tem;
}