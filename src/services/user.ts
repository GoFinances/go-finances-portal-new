import { CreateUser } from '../domain/models/user/createUser';
import { httpClient } from './config'

  
  export const UserService = {
    create: (body: CreateUser) => {
      return httpClient.request<string>({
        url: `/users`,
        method: 'post',
        body
      })
    }
  }
  