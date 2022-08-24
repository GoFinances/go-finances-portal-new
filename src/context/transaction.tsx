import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { useMutateBalance } from "../hooks/queries/transaction";

import { useToast } from "../hooks/use-toast";

import { IBalance } from "../models/transaction/balance";
import { treatmentRequest } from "../services/config/treatmentRequest";

interface ITransactionProvider {
  children: ReactNode
}

export interface ITransactionContext {
    loadBalance: () => Promise<void>
    balance: IBalance | undefined
}


const TransactionContext = createContext<ITransactionContext>({} as ITransactionContext);

const TransactionProvider = ({ children }: ITransactionProvider) => {
    const [balance, setBalance] = useState<IBalance | undefined>(undefined)
    const balanceQuery = useMutateBalance()

    const { messageToast } = useToast()

    useEffect(() => {
        loadBalance();
    },[])

    const loadBalance = useCallback(async () => {
        try {
            balanceQuery.mutateAsync().then(response => {
                treatmentRequest(response)
                setBalance(response.result)
            })
        } catch (error) {
        if(error instanceof Error)
            messageToast('Ops...', error.message, { status: "error" })
        }
    }, [messageToast, balanceQuery]);

    return (
        <TransactionContext.Provider value={{
            loadBalance,
            balance
        }}>
        {children}
        </TransactionContext.Provider>
    )
}


export { TransactionProvider, TransactionContext };