import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { method = 'get', url, data = null } = config
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send()
}
