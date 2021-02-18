import { isDate, isPlainObject } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
    .replace(/%2C/gi, ',')
    .replace(/%24/g, '$')
    .replace(/%20/g, '+')
}

export function buildUrl(url: string, params?: any): string {
  if (!params) {
    return url
  }

  let parts: string[] = []

  Object.keys(params).forEach(key => {
    let val = params[key]
    if (val == null) {
      return // forEach 使用 return 跳出当前循环
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val] // 兼容数组类型的参数
    }

    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
  }

  url += (url.indexOf('?') !== -1 ? '&' : '?') + serializedParams

  return url
}
