#### axios 传递数据

get 请求中传递数据

```
import qs from 'qs'
http.get = function (url: string, params: any) {
    return axios.get(url, {
        params: params,
        paramsSerializer: (params) => {
            return qs.stringify(params, { indices: false })
        },
    })
}
```

```
params = {
    id: [1,2,3]
}
// 数组参数会转换为如下格式
url?id=1&id=2&id=3
```

常见的有以下几种格式

```
qs.stringfy({id: [1,2,3]}, { indices: false})
qs.stringify({ids: [1, 2, 3]}, {arrayFormat: ‘indices‘})
 //形式： id[0]=1&id1]=2&id[2]=3
qs.stringify({id: [1, 2, 3]}, {arrayFormat: ‘brackets‘})
 //形式：id[]=1&id[]=2&id[]=3
qs.stringify({id: [1, 2, 3]}, {arrayFormat: ‘repeat‘})
//形式： id=1&id=2&id=3
```

对 axios 的封装

```
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import { getLocalStorage } from '../../src/utils/storage'

// 设置请求超时
axios.defaults.timeout = 30000
// post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

/*
    请求方法封装
*/
interface axiosObj {
    get?: any
    post?: any
    put?: any
    delete?: any
    sendForm?: any
}

// 请求拦截
axios.interceptors.request.use(
    (config) => {
        if (getLocalStorage('userInfo')) {
            const { token, userId, username } = JSON.parse(getLocalStorage('userInfo'))
            config.headers = {
                ...config.headers,
                token,
                userId,
                username,
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)
// 响应拦截
axios.interceptors.response.use(
    (response) => {
        if (response.status === 200 || response.status === 304) {
            checCode(response)
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    (error) => {
        if (error.response.status === 504) {
            Message({
                message: '请求超时',
                type: 'error',
            })
        } else {
            const { message } = error.response.data
            Message({
                message,
                type: 'error',
            })
        }
        return Promise.reject(error.response)
    },
)

/*
 常见的请求方法get、post等
*/

const http: axiosObj = Object.create(null)

http.get = function (url: string, params: any) {
    return axios.get(url, {
        params: params,
        paramsSerializer: (params) => {
            return qs.stringify(params, { indices: false })
        },
    })
}

http.post = function (url: string, params: any) {
    return axios.post(url, params)
}

http.put = function (url: string, params: any) {
    return axios.put(url, params)
}

http.delete = function (url: string, params: any) {
    return axios.delete(url, params)
}

interface fileObj {
    file: any
    [key: string]: any
}
// 上传文件
http.sendForm = function (url: string, params: fileObj) {
    const formData = new FormData() as any
    params.file && formData.append('file', params.file)
    const param: dynamicObj = Object.create(null)
    Object.keys(params).map((key) => {
        if (key !== 'file') {
            param[key] = params[key]
        }
    })
    Object.keys(params).length > 0 && formData.append('params', JSON.stringify(param))
    return axios.post(url, formData)
}

// 检查业务逻辑
function checCode(response: any) {
    const data = response.data
    // 未登录
    if (data.ret === -100) {
        location.replace('/#/login')
    }
    if (data.data === null) {
        data.data = {}
    }
    const { ret, msg } = response.data
    if (ret !== 1) {
        Message({
            message: msg,
            type: 'error',
        })
    }
    return response
}
export default http

```
