var Promise = require('./es6-promise.min.js')

//import * as importpromise from './es6-promise.min.js'

class Http {
    constructor(){
        
    }
    // console1(){
    //     console.log('import',importpromise)
    // }
    // console2(){
    //     console.log('require',Promise)
    // }
    wxPromisify(fn) {
        return function (obj = {}) {
            return new Promise((resolve, reject) => {
                obj.success = function (res) {
                    //成功
                    resolve(res)
                }
                obj.fail = function (res) {
                    //失败
                    reject(res)
                }
                fn(obj)
            })
        }
    }
    /**
     * 微信请求get方法
     * url
     * data 以对象的格式传入
     */
    getRequest(url, data) {
        var getRequest = this.wxPromisify(wx.request)
        return getRequest({
            url: url,
            method: 'GET',
            data: data,
            header: {
                'Content-Type': 'application/json'
            }
        })
    }

    /**
     * 微信请求post方法封装
     * url
     * data 以对象的格式传入
     */
    postRequest(url, data) {
        var postRequest = this.wxPromisify(wx.request)
        return postRequest({
            url: url,
            method: 'POST',
            data: data,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
        })
    }
    wxLogin() {
        return this.wxPromisify(wx.login)
    }
    wxGetSetting() {
        return this.wxPromisify(wx.getSetting)
    }
    wxGetUserInfo(){
        return this.wxPromisify(wx.getUserInfo)
    }

}

export {
    Http
}