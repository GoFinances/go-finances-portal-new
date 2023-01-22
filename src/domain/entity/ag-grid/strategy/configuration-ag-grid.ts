import { AgGridReact } from 'ag-grid-react';
import { ColDef, ColGroupDef, PaginationChangedEvent } from "ag-grid-community";

export class StrategyConfigurationAgGrid {
  private _ref: React.RefObject<AgGridReact<any>> | undefined = undefined
  private _rowData: any[] = []
  private _columnDefs: (ColDef<any> | ColGroupDef<any>)[] | null = []
  private _defaultColDef: ColDef<any> = {}
  private _animateRows: boolean = false
  private _columnTypes: { [key: string]: ColDef<any> } | undefined = {}
  private _pagination: boolean = false
  private _paginationPageSize: number = 10
  

  get paginationPageSize(): number {
    return this._paginationPageSize;
  }

  setPaginationPageSize(value: number) {
    this._paginationPageSize = value;
  }

  get pagination(): boolean {
    return this._pagination;
  }

  setPagination(value: boolean) {
    this._pagination = value;
  }

  get ref(): React.RefObject<AgGridReact<any>> | undefined {
    return this._ref;
  }

  setRef(value: React.RefObject<AgGridReact<any>> | undefined) {
    this._ref = value;
  }

  get rowData(): any[] {
    return this._rowData;
  }

  setRowData(value: any[]) {
    this._rowData = value;
  }

  get columnDefs(): (ColDef<any> | ColGroupDef<any>)[] | null {
    return this._columnDefs;
  }

  setColumnDefs(value: (ColDef<any> | ColGroupDef<any>)[] | null) {
    this._columnDefs = value;
  }

  get defaultColDef(): ColDef<any> {
    return this._defaultColDef;
  }

  setDefaultColDef(value: ColDef<any>) {
    this._defaultColDef = value;
  }

  get animateRows(): boolean {
    return this._animateRows;
  }

  setAnimateRows(value: boolean) {
    this._animateRows = value;
  }

  get columnTypes(): { [key: string]: ColDef<any> } | undefined {
    return this._columnTypes;
  }

  setColumnTypes(value: { [key: string]: ColDef<any> } | undefined) {
    this._columnTypes = value;
  }


  onPaginationChanged(event: PaginationChangedEvent){
  }

}