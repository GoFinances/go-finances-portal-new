import { LoginUser } from '../models/authentication/loginUser'
import { httpClient } from './config'
import { IBalance } from '../models/transaction/balance';

  
export const TransactionService = {
    balance: () => {
        return httpClient.request<IBalance>({
            url: `/transactions/balance`,
            method: 'get'
        })
    }
}
  