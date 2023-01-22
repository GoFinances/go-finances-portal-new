import { LoginResponse } from '../domain/models/authentication/loginUser';
import { LoginUser } from '../domain/models/authentication/loginUser'
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
  