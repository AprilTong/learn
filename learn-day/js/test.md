import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
import moment from 'moment'
import { getLocalStorage } from '../utils/storage'
import { Loading } from 'element-ui'
import { version } from '../../config'
let baseUrl = ''
// if (process.env.NODE_ENV === 'development') {
// baseUrl = '';
// }
/_ eslint-disable no-undef _/
let pkgTime = moment(PKGTIME).format('YYYY-MM-DD HH:mm:ss')

// 处理请求重复提交
// let pending = [] //声明一个数组用于存储每个 ajax 请求的取消函数和 ajax 标识
// let cancelToken = axios.CancelToken
// let removeRepeatUrl = ever => {
// for (let p in pending) {
// if (pending[p].u === ever.url + '&' + ever.method) {
// //当前请求在数组中存在时执行函数体
// pending[p].f() //执行取消操作
// pending.splice(p, 1) //把这条记录从数组中移除
// }
// }
// }
class HTTP {
constructor() {
this.loadingRequestCount = 0
this.loadingInstance = null
this.xhr = axios.create({
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
// timeout: 60000,
withCredentials: true,
pkgTime,
},
})
// 请求拦截
this.xhr.interceptors.request.use(
opts => {
opts.url = baseUrl + opts.url
// 请求头中添加版本信息
opts.headers.version = version
if (opts.isShowLoading) {
// 请求拦截进来调用显示 loading 效果
this.showLoading()
}
if (getLocalStorage('userInfo')) {
const { token, userId, username } = JSON.parse(getLocalStorage('userInfo'))
opts.headers = {
...opts.headers,
token,
userId,
username: encodeURI(username),
}
}
// 自定义取消事件
// if (opts.cancelToken === undefined) {
// removeRepeatUrl(opts)
// opts.cancelToken = new cancelToken(c => {
// // 自定义标识
// pending.push({ u: opts.url + '&' + opts.method, f: c })
// })
// }
return opts
},
function(error) {
return Promise.reject(error)
},
)
// 响应拦截
this.xhr.interceptors.response.use(
response => {
// 响应拦截进来隐藏 loading 效果，此处采用延时处理是合并 loading 请求效果，避免多次请求 loading 关闭又开启
// 合并 loading 请求效果 避免重复请求
if (response.config.isShowLoading) {
setTimeout(() => {
this.hideLoading()
}, 200)
}
// removeRepeatUrl(response.config)
return response
},
error => {
setTimeout(() => {
this.hideLoading()
}, 200)
// if (axios.isCancel(error)) {
// return {
// status: 200,
// data: { data: null, ret: null },
// }
// }
return Promise.resolve(error.response)
},
)
}
request(opts) {
return this.xhr
.request(opts)
.then(this.checkStatus)
.then(this.checCode)
}
get(url, opts = { isShowLoading: true }) {
opts = opts || {}
opts.method = 'get'
opts.url = url
return this.request(opts)
}
post(url, data, opts = { isShowLoading: true }) {
opts = opts || {}
opts.method = 'post'
opts.url = url
opts.data = qs.stringify(data)
return this.request(opts)
}
delete(url, opts = { isShowLoading: true }) {
opts = opts || {}
opts.method = 'delete'
opts.url = url
return this.request(opts)
}

    put(url, data, opts = { isShowLoading: true }) {
        opts = opts || {}
        opts.method = 'put'
        opts.url = url
        opts.headers = {
            'Content-Type': 'application/json',
        }
        opts.data = data
        return this.request(opts)
    }

    postJson(url, data, opts = { isShowLoading: true }) {
        opts = opts || {}
        opts.method = 'post'
        opts.url = url
        opts.headers = {
            'Content-Type': 'application/json',
        }
        opts.data = data
        return this.request(opts)
    }
    getWithParam(url, params, opts = { isShowLoading: true }) {
        if (params && Object.keys(params).length) {
            url += '?'
            const searchText = []
            Object.keys(params).map((p, index) => {
                searchText.push(`${index ? '&' : ''}${p}=${params[p]}`)
            })
            url += searchText.join('')
        }
        return this.get(url, opts)
    }
    // 上传文件
    sendForm(url, data, opts = { isShowLoading: true }) {
        opts = opts || {}
        opts.method = 'post'
        opts.url = url
        let formData = new FormData()
        formData.append('file', data.file)
        data.file2 && formData.append('file2', data.file2)
        data.file3 && formData.append('file3', data.file3)
        data.file4 && formData.append('file4', data.file4)
        data.file5 && formData.append('file5', data.file5)
        let params = {}
        Object.keys(data).map(key => {
            if (key.indexOf('file') === -1) {
                params[key] = data[key]
            }
        })
        Object.keys(params).length > 0 && formData.append('params', JSON.stringify(params))
        opts.data = formData
        return this.request(opts)
    }
    // 上传文件数组
    uploadForm(url, data, opts = { isShowLoading: true }) {
        opts = opts || {}
        opts.method = 'post'
        opts.url = url
        let formData = new FormData()
        let params = {}
        Object.keys(data).map(key => {
            if (key.indexOf('file') === -1) {
                params[key] = data[key]
            } else {
                formData.append('files', data[key])
            }
        })
        Object.keys(params).length > 0 && formData.append('params', JSON.stringify(params))
        opts.data = formData
        return this.request(opts)
    }
    checkStatus(response) {
        if (response.status === 200 || response.status === 304) {
            return response
        }
        return {
            data: {
                code: 404,
                msg: response.statusText || '404 NOT FOUND',
                data: response.statusText,
            },
        }
    }
    // 校验业务逻辑
    checCode(response) {
        const data = response.data
        // 未登录
        if (data.ret === -100) {
            location.replace('/#/login')
        }
        if (data.data === null) {
            data.data = {}
        }
        return response
    }
    showLoading() {
        if (this.loadingRequestCount === 0) {
            this.loadingInstance = Loading.service({
                lock: true,
                body: true,
                text: '加载中...',
                background: 'rgba(255, 255, 255, 0.5)',
                target: 'body',
                customClass: 'create-isLoading',
            })
        }
        this.loadingRequestCount++
    }
    hideLoading() {
        if (this.loadingRequestCount <= 0) return
        this.loadingRequestCount--
        if (this.loadingRequestCount === 0) {
            Vue.nextTick(() => {
                //以服务的方式调用的 Loading 需要异步关闭
                this.loadingInstance.close()
            })
        }
    }

}

export default new HTTP()
