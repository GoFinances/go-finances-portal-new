import React, { useContext, useEffect, useMemo } from "react";

import { Box } from "../../atomic";

import AgGrid from "../../ag-grid";
import CardsDash from "../../organisms/cards-dash";

import { TransactionDashGrid } from "../../../domain/entity/ag-grid/transaction-dashboard";
import { TransactionContext } from "../../../context/transaction";
import FilterListTransaction from "./filter";

export default function Dashboard() {
  const { transactions } = useContext(TransactionContext);

  const configuration = useMemo(() => new TransactionDashGrid(), []);

  useEffect(() => {
    configuration.setRowData(transactions);
    configuration.ref?.current?.api?.sizeColumnsToFit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  console.log();
  return (
    <Box width={"100%"}>
      <CardsDash />
      <FilterListTransaction />
      <AgGrid configuration={configuration} />
    </Box>
  );
}
