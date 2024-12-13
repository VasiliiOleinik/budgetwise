import { BUDGET_TYPES } from '@/pages/AddBudget/constants'

export function getBasicDistribution(income: number) {
  return {
    needs: Math.round(income * 0.5),
    wants: Math.round(income * 0.3),
    savings: Math.round(income * 0.2),
  }
}

export function getSavingsAndGiving(income: number) {
  return {
    needs: Math.round(income * 0.7),
    wants: Math.round(income * 0.2),
    savings: Math.round(income * 0.1),
  }
}

export function getMinimalSavings(income: number) {
  return {
    needs: Math.round(income * 0.8),
    wants: 0,
    savings: Math.round(income * 0.2),
  }
}

export function getUniversalBalance(income: number) {
  return {
    needs: Math.round(income * 0.6),
    wants: Math.round(income * 0.3),
    savings: Math.round(income * 0.1),
  }
}

export function getZeroBased() {
  return {
    needs: 0,
    wants: 0,
    savings: 0,
  }
}

export function getBudgetPrediction(budgetType, income) {
  if (budgetType === BUDGET_TYPES.basicDistribution) {
    return getBasicDistribution(income)
  }

  if (budgetType === BUDGET_TYPES.minimalSavings) {
    return getMinimalSavings(income)
  }
  if (budgetType === BUDGET_TYPES.savingsAndGiving) {
    return getSavingsAndGiving(income)
  }
  if (budgetType === BUDGET_TYPES.universalBalance) {
    return getUniversalBalance(income)
  }

  return getZeroBased()
}

export function calculateExpenses(items) {
  return items.reduce((acc, item) => acc + item.amount, 0)
}
