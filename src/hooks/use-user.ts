import { useContext } from "react"
import { IUserContext, UserContext } from "../context/user"

export const useUser = (): IUserContext => {
    return useContext(UserContext)
}