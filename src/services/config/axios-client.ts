import { IResponse } from './IResponse';
import qs from 'qs'
import { parseCookies } from 'nookies'

import { HttpRequest } from './types'
import { api } from './api-client';


const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL

export class AxiosHttpClient {
  async request<T = any>(data: HttpRequest, customURL?: string) {
    try {
      // await this.refreshToken()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error)
    }

    const baseURL = customURL || apiURL
    const accessToken = parseCookies()['@GOFINANCE:token']

    if (accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${accessToken}`
        })
      })
    }

    const response = await api.request<IResponse<T>>({
      url: `${baseURL}${data.url}`,
      method: data.method,
      data: data.body,
      params: data.params,
      headers: data.headers,
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })

    return response
  }
}
