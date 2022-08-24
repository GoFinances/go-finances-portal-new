import { IResponse } from '../../services/config/IResponse';
import { useMutation } from 'react-query'
import { IBalance } from '../../models/transaction/balance';
import { TransactionService } from '../../services/transaction';


const getBalance = async () => {
  const response = await TransactionService.balance()
  return response.data
}

export function useMutateBalance() {
  return useMutation<IResponse<IBalance>, unknown>(() => getBalance() )
}
