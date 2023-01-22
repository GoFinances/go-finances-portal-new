import { ValueFormatterParams } from "ag-grid-community";

export function typeTransactionFormatter({ value }: ValueFormatterParams ) {
    return value === 'income'? 'A Receber' : value === 'outcome' ? 'A Pagar' : '-'
}
  