import { IResponse } from '../../services/config/IResponse';
import { LoginUser, LoginResponse } from '../../domain/models/authentication/loginUser';
import { useMutation } from 'react-query'
import { AuthenticationService } from '../../services/authentication';


const login = async (user: LoginUser) => {
  const response = await AuthenticationService.login(user)
  return response.data
}

export function useMutateAuthenticate() {
  return useMutation<IResponse<LoginResponse>, unknown, LoginUser>(user =>
    login(user)
  )
}
