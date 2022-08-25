export const Format = {
    numberToMoney: (value: number) => 
        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            value,
        ),
    dateLibToDateSql: (date: string) => {
        return Number(date.replaceAll('-',''))
    },
    dateSqlToDate: (date: string) => {
        const year = +date.substring(0, 4);
        const month = +date.substring(4, 6);
        const day = +date.substring(6, 8);

        return Intl.DateTimeFormat('pt-BR').format(new Date(year, month - 1, day))
    },
    dateToDateSql: (date = new Date()) => {
        function padTo2Digits(num:number) {
            return num.toString().padStart(2, '0');
        }

        return Number([
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join(''));
    }
}