import { Ref } from 'react';

import { CellClassParams } from 'ag-grid-community'

import { currencyFormatter } from "../../../utils/ag-grid/currencyFormatter";
import { dateFormatter } from "../../../utils/ag-grid/dateFormatter";
import { typeTransactionFormatter } from "../../../utils/ag-grid/typeTransactionFormatter";

import { StrategyConfigurationAgGrid } from "./strategy/configuration-ag-grid";

export class TransactionDashGrid extends StrategyConfigurationAgGrid {
    constructor() {
        super();
        super.setPagination(true)
        super.setColumnDefs([
            {  headerName: "Nome", field: "title" },
            {  headerName: "Tipo", field: "type", valueFormatter: typeTransactionFormatter },
            {  headerName: "Categoria", field: "category.title" },
            { 
                
                headerName: "Valor $", 
                field: "value",
                cellClassRules: {
                    'rag-red': ({ data }: CellClassParams) => data.type === "outcome"
                },
                valueFormatter: currencyFormatter
            },
            {
                
                headerName: "Data de Referência",
                field: "dt_reference",
                valueFormatter: dateFormatter
            },
        ])
    }
}