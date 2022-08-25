import { IResponse } from '../../services/config/IResponse';

import { useMutation, useQuery } from 'react-query'

import { IBalance } from '../../models/transaction/balance';

import { TransactionService } from '../../services/transaction';
import { IGetTransactionsFilter } from '../../models/transaction/transaction';


const getBalance = async () => {
  const response = await TransactionService.balance()
  return response.data
}

const getTransactions = async (body :IGetTransactionsFilter) => {
  const response = await TransactionService.list(body)
  return response.data
}

export function useMutateBalance() {
  return useMutation<IResponse<IBalance>, unknown>(() => getBalance() )
}

export function useQueryTransactions(body: IGetTransactionsFilter) {
  return useQuery('queryTransactions', () => getTransactions(body), { refetchInterval: false }) 
}
