export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'post'
  | 'POST'
  | 'options'
  | 'OPTIONS'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  params?: any
  data?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number // 请求超时时间
}

export interface AxiosResponse {
  data: any
  status: number // 响应状态
  statusText: string // 完整的响应状态文本（例如 "200 OK"）
  headers: any // 响应头
  config: AxiosRequestConfig // 请求配置对象
  request: any // XMLHttpRequest 对象
}

export interface AxiosPromise extends Promise<AxiosResponse> {}

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}
