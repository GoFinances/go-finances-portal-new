import { IResponseTransaction } from './../models/transaction/response-transactions';
import { httpClient } from './config'
import { IBalance } from '../models/transaction/balance';

export const TransactionService = {
    balance: () => {
        return httpClient.request<IBalance>({
            url: `/transactions/balance`,
            method: 'get'
        })
    },
    list: () => {
        return httpClient.request<IResponseTransaction>({
            url: `/transactions`,
            method: 'get'
        })
    }
}
  