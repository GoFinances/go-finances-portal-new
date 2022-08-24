export const Format = {
    numberToMoney: (value: number) => 
        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            value,
        ),
    dateSqlToDate: (date: Date) => 
        Intl.DateTimeFormat('pt-BR').format(new Date(date))
}