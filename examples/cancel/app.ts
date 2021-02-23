import axios, { Canceler } from '../../src/index'

// 1、使用CancelToken.source() 工厂函数创建 cancel token
const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/cancel/get', {
  cancelToken: source.token
}).catch((e) => {
  if (axios.isCancel(e)) {
    console.log('request canceled' + e.message)
  }
})

setTimeout(() => {
  source.cancel('Operation canceled by the user.')
  axios.post('/cancel/post', {
    a: 1
  }, {
    cancelToken: source.token
  }).catch((e) => {
    if (axios.isCancel(e)) {
      console.log(e.message)
    }
  })
}, 100)


// 2、通过传递executor函数到CancelToken的构造函数来创建cancel token
let cancel: Canceler

axios.get('/cancel/get', {
  cancelToken: new CancelToken(c => {
    cancel = c
  })
}).catch((e) => {
  if (axios.isCancel(e)) {
    console.log('Request canceled')
  }
})

setTimeout(() => {
  cancel()
}, 200);

