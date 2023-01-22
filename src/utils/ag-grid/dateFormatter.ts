import { ValueFormatterParams } from "ag-grid-community";

export function dateFormatter(data: ValueFormatterParams) {
    return String(data.value).replace(/(\d{4})(\d{2})(\d{2})/, "$3/$2/$1");
}
  