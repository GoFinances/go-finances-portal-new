import { IBalance } from './balance';
import { ITransaction } from './transaction';

export interface IResponseTransaction {
    transactions: ITransaction[]
    balance: IBalance
    total: number
}