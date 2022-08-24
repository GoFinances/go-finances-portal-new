import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { useMutateBalance, useQueryTransactions } from "../hooks/queries/transaction";

import { useToast } from "../hooks/use-toast";

import { IBalance } from "../models/transaction/balance";
import { ITransaction } from "../models/transaction/transaction";

import { IResponse } from "../services/config/IResponse";

import { treatmentRequest } from "../services/config/treatmentRequest";

import { Format } from "../utils/format";

interface ITransactionProvider {
  children: ReactNode
}

export interface ITransactionContext {
    balance: IBalance | undefined
    transactions: ITransaction[]
}


const TransactionContext = createContext<ITransactionContext>({} as ITransactionContext);

const TransactionProvider = ({ children }: ITransactionProvider) => {
    const [balance, setBalance] = useState<IBalance | undefined>(undefined)
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const transactionQuery = useQueryTransactions()

    const { messageToast } = useToast()

    useEffect(() => {
        if(transactionQuery.data){
            try {
                const response = transactionQuery.data
                treatmentRequest(response)
    
                const { balance, transactions } = response.result
    
                balance.income_formatted = Format.numberToMoney(balance.income)
                balance.outcome_formatted = Format.numberToMoney(balance.outcome)
                balance.total_formatted = Format.numberToMoney(balance.total)
                
                transactions.forEach(transaction => {
                    const { value, type, created_at } = transaction
                    transaction.value = type === 'outcome' ? value * -1 : value
                    transaction.formattedValue = Format.numberToMoney(transaction.value)
                    transaction.formattedDate = Format.dateSqlToDate(created_at)
                })
    
                setBalance(balance)
                setTransactions(transactions);
            } catch (error) {
                if(error instanceof Error)
                    messageToast('Ops...', error.message, { status: "error" })
            }
        }
    },[transactionQuery.data, messageToast])

    return (
        <TransactionContext.Provider value={{
            balance,
            transactions
        }}>
        {children}
        </TransactionContext.Provider>
    )
}


export { TransactionProvider, TransactionContext };