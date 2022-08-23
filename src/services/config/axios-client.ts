import { IResponse } from './IResponse';
import axios from 'axios'
import qs from 'qs'

import { HttpRequest } from './types'

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
    const accessToken = localStorage.getItem('access_token')

    if (accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${accessToken}`
        })
      })
    }

    console.log('baseURL', baseURL)
    console.log('url', data.url)
    
    const response = await axios.request<IResponse<T>>({
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
