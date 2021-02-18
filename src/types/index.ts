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
  data?: any,
  headers?: any,
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any,
  status: number,
  statusTest: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {
}