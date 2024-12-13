import { useMemo } from 'react'
import { getBudgetPrediction } from './helpers'

export const useBudgetStatistics = ({ budgetType, income }) => {
  const budgetPredictions = useMemo(() => {
    return getBudgetPrediction(budgetType, income)
  }, [budgetType, income])

  return {
    budgetPredictions,
  }
}
