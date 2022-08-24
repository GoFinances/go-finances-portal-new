import { useContext } from "react"
import { ITransactionContext, TransactionContext } from "../context/transaction"

export const useTransaction = (): ITransactionContext => {
    return useContext(TransactionContext)
}