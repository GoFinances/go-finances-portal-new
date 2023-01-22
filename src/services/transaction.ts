import { IResponseTransaction } from '../domain/models/transaction/response-transactions';

import { httpClient } from './config';

import { IBalance } from '../domain/models/transaction/balance';
import { IGetTransactionsFilter } from '../domain/models/transaction/transaction';

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
  