import { AxiosHttpClient } from './axios-client'

export type { HttpMethod, HttpRequest, HttpResponse } from './types'
export { HttpStatusCode } from './types'

export const httpClient = new AxiosHttpClient()
