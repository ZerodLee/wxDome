import { url } from './consts/urls.js'
import { Http } from './http.js'

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const consoleUrl1 = v => url.url1

const consoleUrl2 = v => url.url2

const consoleHttps = v => {
  let theHttp = new Http()
  
}

module.exports = {
  formatTime,consoleUrl1,consoleUrl2,consoleHttps
}
