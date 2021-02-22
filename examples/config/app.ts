import axios, { AxiosTransformer } from '../../src/index'
import QS from 'qs'

axios.defaults.headers.common['test2'] = 123 // 对所有请求添加
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 仅对post类型的请求添加

// axios({
//   url: '/config/post',
//   method: 'post',
//   data: QS.stringify({
//     a: 1,
//     b: 2
//   }),
//   headers: {
//     test: 321
//   }
// }).then((res) => {
//   console.log(res.data)
// })

// axios({
// // 允许在向服务器发送前，修改请求数据
// transformRequest: [function (data) {
//   return QS.stringify(data)
// }, ...(axios.defaults.transformRequest as AxiosTransformer[])],
// // 在传递给then/catch前，允许修改响应数据
// transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function (data) {
//   if (typeof data === 'object') {
//     data.b = 2
//   }
//   return data
// }],
//   url: '/config/post',
//   method: 'post',
//   data: {
//     a: 1
//   }
// }).then((res) => {
//   console.log(res.data)
// })

const instance = axios.create({
  // 允许在向服务器发送前，修改请求数据
  transformRequest: [function (data) {
    return QS.stringify(data)
  }, ...(axios.defaults.transformRequest as AxiosTransformer[])],
  // 在传递给then/catch前，允许修改响应数据
  transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function (data) {
    if (typeof data === 'object') {
      data.b = 2
    }
    return data
  }]
})

instance({
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  }
}).then((res) => {
  console.log(res.data)
})