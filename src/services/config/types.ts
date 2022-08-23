export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  params?: any
  headers?: any
}

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any, E = any> = {
  statusCode: HttpStatusCode
  body?: T
  error?: E
}

export type PostRequestError400<T> = {
  data: T
  error: string
  readable_message: string
}
