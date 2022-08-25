import { IResponseTransaction } from './../models/transaction/response-transactions';

import { httpClient } from './config';

import { IBalance } from '../models/transaction/balance';
import { IGetTransactionsFilter } from '../models/transaction/transaction';

export const TransactionService = {
    balance: () => {
        return httpClient.request<IBalance>({
            url: `/transactions/balance`,
            method: 'get'
        })
    },
    list: (params: IGetTransactionsFilter) => {
        return httpClient.request<IResponseTransaction>({
            url: `/transactions`,
            method: 'get',
            params
        })
    }
}
  