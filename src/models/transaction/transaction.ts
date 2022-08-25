export interface ITransaction {
    id: string;
    title: string;
    value: number;
    formattedValue: string;
    formattedDate: string;
    type: 'income' | 'outcome';
    category: { title: string; background_color_light: string; background_color_dark: string; icon: string; };
    created_at: Date;
    dt_reference: number
}

export interface IGetTransactionsFilter {
    take: number
    page: number
    category_id: string[]
    type: string
    dt_init: number
    dt_end: number
}