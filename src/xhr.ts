import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { method = 'get', url, data = null, headers } = config
  const request = new XMLHttpRequest()

  // request.onreadystatechange = function () {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.responseText)
  //   }
  // }

  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLocaleLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data)
}
