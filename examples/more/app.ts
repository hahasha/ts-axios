import axios from '../../src'

// 测试使用withCredential跨域传递cookie
// document.cookie = 'a=123'

// axios.get('/more/get').then(res => {
//   console.log(res)
// })

// axios.post('http://127.0.0.1:8088/more/server2', {}, {
//   withCredentials: true
// }).then(res => {
//   console.log(res)
// })

// 测试XSRF防御

const instance = axios.create({
  xsrfCookieName: 'XSRF-TOKAN-D',
  xsrfHeaderName: 'X-XSRF-TOKEN-D'
})

instance.get('/more/get').then(res => {
  console.log(res)
})