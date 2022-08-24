import { useContext } from "react"
import { IAuthenticationContext, AuthenticationContext } from "../context/authentication"

export const useAuthentication = (): IAuthenticationContext => {
    return useContext(AuthenticationContext)
}