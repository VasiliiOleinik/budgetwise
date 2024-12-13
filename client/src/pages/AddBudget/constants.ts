export enum BUDGET_TYPES {
    basicDistribution = "Basic Distribution", // 50/30/20
    savingsAndGiving = "Savings and Giving", // 70/20/10
    minimalSavings = "Minimal Savings", // 80, 20
    universalBalance = "Universal Balance", // 60/20/10/10
    zeroBased = "Zero-Based Budgeting",
}

export const budgetOptions = [
    { label: BUDGET_TYPES.basicDistribution, value: BUDGET_TYPES.basicDistribution },
    { label: BUDGET_TYPES.savingsAndGiving, value: BUDGET_TYPES.savingsAndGiving },
    { label: BUDGET_TYPES.minimalSavings, value: BUDGET_TYPES.minimalSavings },
    { label: BUDGET_TYPES.universalBalance, value: BUDGET_TYPES.universalBalance },
    { label: BUDGET_TYPES.zeroBased , value: BUDGET_TYPES.zeroBased },
]