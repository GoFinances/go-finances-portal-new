import { IResponse } from './../../services/config/IResponse';
import { UserService } from './../../services/user';
import { CreateUser } from '../../domain/models/user/createUser';
import { useMutation } from 'react-query'


const createUser = async (user: CreateUser) => {
  const response = await UserService.create(user)
  return response.data
}

export function useMutateUser() {
  return useMutation<IResponse<string>, unknown, CreateUser>(user =>
    createUser(user)
  )
}
