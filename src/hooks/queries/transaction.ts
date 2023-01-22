import { IResponse } from '../../services/config/IResponse';

import { useMutation, useQuery } from 'react-query'

import { IBalance } from '../../domain/models/transaction/balance';

import { TransactionService } from '../../services/transaction';
import { IGetTransactionsFilter } from '../../domain/models/transaction/transaction';


const getBalance = async () => {
  const response = await TransactionService.balance()
  return response.data
}

const getTransactions = async (params :IGetTransactionsFilter) => {
  const response = await TransactionService.list(params)
  return response.data
}

export function useMutateBalance() {
  return useMutation<IResponse<IBalance>, unknown>(() => getBalance() )
}

export function useQueryTransactions(body: IGetTransactionsFilter) {
  return useQuery('queryTransactions', () => getTransactions(body), { refetchInterval: false }) 
}
