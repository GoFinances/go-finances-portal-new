import { ValueFormatterParams } from "ag-grid-community";

export function currencyFormatter(
    value: ValueFormatterParams, 
    locale: string = 'pt-BR', 
    options: Intl.NumberFormatOptions = { style: 'currency', currency: 'BRL' }
) {
    return Intl.NumberFormat(locale, options).format(value.value);
}
  