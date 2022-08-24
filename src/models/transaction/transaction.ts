export interface ITransaction {
    id: string;
    title: string;
    value: number;
    formattedValue: string;
    formattedDate: string;
    type: 'income' | 'outcome';
    category: { title: string; background_color_light: string; background_color_dark: string; icon: string; };
    created_at: Date;
}