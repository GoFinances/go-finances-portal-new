import { useRouter } from "next/router";
import { createContext, useState, ReactNode, useCallback, useEffect } from "react";
import { UseMutationResult } from "react-query";
import { useMutateAuthenticate } from "../hooks/queries/useAuthentication";

import { useToast } from "../hooks/use-toast";
import { LoginResponse, LoginUser } from "../models/authentication/loginUser";
import { IResponse } from "../services/config/IResponse";
import { treatmentRequest } from "../services/config/treatmentRequest";

interface IAuthenticationProvider {
  children: ReactNode
}

export interface IAuthenticationContext {
  loading: boolean
  userAuthenticated: IUser | undefined
  signIn: (userAuthentication: LoginUser) => Promise<void>
  authenticateMutate: UseMutationResult<IResponse<LoginResponse>, unknown, LoginUser, unknown>
}

interface IUser {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
  }

const AuthenticationContext = createContext<IAuthenticationContext>({} as IAuthenticationContext);

const AuthenticationProvider = ({ children }: IAuthenticationProvider) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userAuthenticated, setUserAuthenticated ] = useState<IUser | undefined>();

  const { push } = useRouter()
  const { messageToast } = useToast()
  const authenticateMutate = useMutateAuthenticate()

  useEffect(()=> {
    if(!!userAuthenticated){
      push("/dashboard")
    }
  },[userAuthenticated, push])

  const signIn = useCallback(async (userAuthentication: LoginUser) => {
    try {
      const response = await authenticateMutate.mutateAsync(userAuthentication)
      treatmentRequest(response)

      const { token, user } = response.result
  
      localStorage.setItem('@GOFINANCE:token', token);
      setUserAuthenticated({ ...user } as IUser );
    } catch (error) {
      if(error instanceof Error)
        messageToast('Ops...', error.message, { status: "error" })
    }
  }, [authenticateMutate, messageToast]);
 

  return (
    <AuthenticationContext.Provider value={{
      loading,
      userAuthenticated,
      authenticateMutate,
      signIn,
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}


export { AuthenticationProvider, AuthenticationContext };