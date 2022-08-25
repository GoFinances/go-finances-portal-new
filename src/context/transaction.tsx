import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { useQueryTransactions } from "../hooks/queries/transaction";

import { useToast } from "../hooks/use-toast";

import { IBalance } from "../models/transaction/balance";
import { IGetTransactionsFilter, ITransaction } from "../models/transaction/transaction";

import { treatmentRequest } from "../services/config/treatmentRequest";

import { Format } from "../utils/format";

interface ITransactionProvider {
  children: ReactNode
}

export interface ITransactionContext {
    balance: IBalance | undefined
    transactions: ITransaction[]
    totalTransaction: number
    filter: IGetTransactionsFilter
    changePage: (page: number) => void
}


const TransactionContext = createContext<ITransactionContext>({} as ITransactionContext);

const TransactionProvider = ({ children }: ITransactionProvider) => {
    const [totalTransaction, setTotalTransaction] = useState<number>(0)
    const [balance, setBalance] = useState<IBalance | undefined>(undefined)
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    const [filter, setFilter] = useState<IGetTransactionsFilter>({ take: 10, page: 1 })
    const transactionQuery = useQueryTransactions(filter)

    const { messageToast } = useToast()

    useEffect(() => {
        console.log('filter', filter)
        if (transactionQuery.data) {
            transactionQuery.refetch()
        }
    },[filter])

    useEffect(() => {
        if(transactionQuery.data){
            try {
                const response = transactionQuery.data
                treatmentRequest(response)
    
                const { balance, transactions, total } = response.result
    
                balance.income_formatted = Format.numberToMoney(balance.income)
                balance.outcome_formatted = Format.numberToMoney(balance.outcome)
                balance.total_formatted = Format.numberToMoney(balance.total)
                
                transactions.forEach(transaction => {
                    const { value, type, created_at } = transaction
                    transaction.value = type === 'outcome' ? value * -1 : value
                    transaction.formattedValue = Format.numberToMoney(transaction.value)
                    transaction.formattedDate = Format.dateSqlToDate(created_at)
                })
    
                setTotalTransaction(total);
                setBalance(balance);
                setTransactions(transactions);
            } catch (error) {
                if(error instanceof Error)
                    messageToast('Ops...', error.message, { status: "error" })
            }
        }
    },[transactionQuery.data, messageToast])

    const changePage = useCallback((page: number) => {
        setFilter({ ...filter,  page})
    },[])

    return (
        <TransactionContext.Provider value={{
            balance,
            transactions,
            totalTransaction,
            filter,
            changePage
        }}>
        {children}
        </TransactionContext.Provider>
    )
}


export { TransactionProvider, TransactionContext };