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
  authenticateMutate: UseMutationResult<IResponse<LoginResponse>, unknown, LoginUser, unknown>
  signIn: (userAuthentication: LoginUser) => Promise<void>
  signOut: () => void
}

interface IUser {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
}


interface AuthState {
  token: string;
  user: IUser;
}

const AuthenticationContext = createContext<IAuthenticationContext>({} as IAuthenticationContext);

const AuthenticationProvider = ({ children }: IAuthenticationProvider) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<AuthState | undefined>(() => {
    const token = localStorage.getItem('@GOFINANCE:token');
    const user = localStorage.getItem('@GOFINANCE:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return undefined;
  });

  const router = useRouter()
  const { messageToast } = useToast()
  const authenticateMutate = useMutateAuthenticate()

  useEffect(()=> {
    const path = !!data?.user ? "/dashboard" : "/sign-in"
    router.push(path)
  },[data])

  const signIn = useCallback(async (userAuthentication: LoginUser) => {
    try {
      const response = await authenticateMutate.mutateAsync(userAuthentication)
      treatmentRequest(response)

      const { token, user } = response.result
  
      localStorage.setItem('@GOFINANCE:token', token);
      localStorage.setItem('@GOFINANCE:user', JSON.stringify(user));

      setData({ token, user } as AuthState);
    } catch (error) {
      if(error instanceof Error)
        messageToast('Ops...', error.message, { status: "error" })
    }
  }, [authenticateMutate, messageToast]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GOFINANCE:token');
    setData(undefined);
  }, []);
 

  return (
    <AuthenticationContext.Provider value={{
      loading,
      userAuthenticated: data?.user,
      authenticateMutate,
      signIn,
      signOut
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}


export { AuthenticationProvider, AuthenticationContext };