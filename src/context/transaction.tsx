import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useQueryTransactions } from "../hooks/queries/transaction";

import { useToast } from "../hooks/use-toast";

import { IBalance } from "../domain/models/transaction/balance";
import {
  IGetTransactionsFilter,
  ITransaction,
} from "../domain/models/transaction/transaction";

import { treatmentRequest } from "../services/config/treatmentRequest";

import { Format } from "../utils/format";

interface ITransactionProvider {
  children: ReactNode;
}

export interface ITransactionContext {
  balance: IBalance | undefined;
  transactions: ITransaction[];
  totalTransaction: number;
  filter: IGetTransactionsFilter;
  changePage: (page: number) => void;
  changeFilter: (filter: IGetTransactionsFilter) => void;
}

const initialFilter: IGetTransactionsFilter = {
  take: 100,
  page: 1,
  category_id: [],
  type: "all",
  dt_init: Format.dateToDateSql(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  ),
  dt_end: Format.dateToDateSql(new Date()),
};

const TransactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext
);

const TransactionProvider = ({ children }: ITransactionProvider) => {
  const [totalTransaction, setTotalTransaction] = useState<number>(0);
  const [balance, setBalance] = useState<IBalance | undefined>(undefined);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [filter, setFilter] = useState<IGetTransactionsFilter>(initialFilter);
  const transactionQuery = useQueryTransactions(filter);

  const { messageToast } = useToast();

  useEffect(() => {
    if (transactionQuery.data) {
      transactionQuery.refetch();
    }
  }, [filter]);

  useEffect(() => {
    if (transactionQuery.data) {
      try {
        const response = transactionQuery.data;
        treatmentRequest(response);

        const { balance, transactions, total } = response.result;

        balance.income_formatted = Format.numberToMoney(balance.income);
        balance.outcome_formatted = Format.numberToMoney(balance.outcome);
        balance.total_formatted = Format.numberToMoney(balance.total);

        transactions.forEach((transaction) => {
          const { dt_reference } = transaction;
          transaction.formattedValue = Format.numberToMoney(transaction.value);
          transaction.formattedDate = Format.dateSqlToDate(
            String(dt_reference)
          );
        });

        setTotalTransaction(total);
        setBalance(balance);
        setTransactions(transactions);
      } catch (error) {
        if (error instanceof Error)
          messageToast("Ops...", error.message, { status: "error" });
      }
    }
  }, [transactionQuery.data, messageToast]);

  const changeFilter = useCallback((filter: IGetTransactionsFilter) => {
    setFilter({ ...filter });
  }, []);

  const changePage = useCallback(
    (page: number) => {
      setFilter({ ...filter, page });
    },
    [filter]
  );

  return (
    <TransactionContext.Provider
      value={{
        balance,
        transactions,
        totalTransaction,
        filter,
        changeFilter,
        changePage,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionProvider, TransactionContext };
