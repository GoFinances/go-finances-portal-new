import { useContext } from "react"
import { ICategoryContext, CategoryContext } from "../context/category"

export const useCategory = (): ICategoryContext => {
    return useContext(CategoryContext)
}