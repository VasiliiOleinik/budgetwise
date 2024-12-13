export class BudgetDto {
    title: string;
    budgetType: string;
    income: string;
    currency: string;
    items: {
        icon?: string;
        title: string;
        amount: number;
        description?: string;
    }[]
}