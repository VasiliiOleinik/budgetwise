import { getBudgets } from '@/api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { BUDGET_SECTIONS } from '../AddBudget/constants'

export const useBudgetPage = () => {
  const [selectedBudgetSection, setSelectedBudgetSection] = useState(
    BUDGET_SECTIONS.essentialNeeds,
  )
  const { data: budgets, isLoading } = useQuery({
    queryKey: ['getBudgets'],
    queryFn: getBudgets,
  })

  return { budgets, isLoading, selectedBudgetSection, setSelectedBudgetSection }
}
