import { IResponse } from '../../services/config/IResponse';
import { useMutation, useQuery } from 'react-query'
import { IBalance } from '../../models/transaction/balance';
import { TransactionService } from '../../services/transaction';


const getBalance = async () => {
  const response = await TransactionService.balance()
  return response.data
}

const getTransactions = async () => {
  const response = await TransactionService.list()
  return response.data
}

export function useMutateBalance() {
  return useMutation<IResponse<IBalance>, unknown>(() => getBalance() )
}

export function useQueryTransactions() {
  return useQuery('queryTransactions', getTransactions) 
}
