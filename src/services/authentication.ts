import { LoginResponse } from './../models/authentication/loginUser';
import { LoginUser } from '../models/authentication/loginUser'
import { httpClient } from './config'

  
  export const AuthenticationService = {
    login: (body: LoginUser) => {
      return httpClient.request<LoginResponse>({
        url: `/sessions`,
        method: 'post',
        body
      })
    }
  }
  