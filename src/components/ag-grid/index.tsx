import { AgGridReact } from "ag-grid-react";
import React, { Ref, useEffect, useRef, useState } from "react";
import { StrategyConfigurationAgGrid } from "../../domain/entity/ag-grid/strategy/configuration-ag-grid";

interface IAgGridProps {
  configuration: StrategyConfigurationAgGrid;
  width?: number | string;
  height?: number | string;
}

export default function AgGrid(props: IAgGridProps) {
  const gridRef = useRef<AgGridReact<any>>(null);
  const { configuration, width = "100%", height = 550 } = props;

  useEffect(() => {
    configuration.setRef(gridRef);
  }, [configuration, gridRef]);

  return (
    <div
      className="ag-theme-alpine"
      style={{ width, height, padding: "1rem 0" }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={configuration.rowData}
        columnDefs={configuration.columnDefs}
        defaultColDef={configuration.defaultColDef}
        animateRows={configuration.animateRows}
        columnTypes={configuration.columnTypes}
        pagination={configuration.pagination}
        paginationPageSize={configuration.paginationPageSize}
        onPaginationChanged={configuration.onPaginationChanged}
      />
    </div>
  );
}
