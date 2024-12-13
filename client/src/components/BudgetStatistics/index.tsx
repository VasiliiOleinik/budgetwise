import { AddBudgetSchemaType } from '@/pages/AddBudget/helpers'
import { useBudgetStatistics } from './useBudgetStatistics'
import { currenciesSymbols } from '@/pages/AddBudget/constants'

const BudgetStatistics = ({ formData }: { formData: AddBudgetSchemaType }) => {
  const { income, currency, budgetType } = formData
  const currencySymbol = currenciesSymbols[currency]

  const { budgetPredictions } = useBudgetStatistics({ budgetType, income })

  const { needs, wants, savings } = budgetPredictions
  return (
    <div className="my-4 bg-[#f7f9fc] p-4 grid grid-cols-3 gap-4 rounded">
      <span className="text-sm font-semibold">
        Total monthly income:{' '}
        <span className="font-normal">
          {income}
          {currencySymbol}
        </span>
      </span>
      <span className="text-sm font-semibold">
        Total monthly expenses:{' '}
        <span className="font-normal">0{currencySymbol}</span>
      </span>
      <span className="text-sm font-semibold">
        Remaining income: <span className="font-normal">0{currencySymbol}</span>{' '}
      </span>
      <span className="text-sm font-semibold">
        Needs:{' '}
        <span className="font-normal">
          0{currencySymbol} out of {needs}
          {currencySymbol} budget
        </span>
      </span>
      <span className="text-sm font-semibold">
        Wants:{' '}
        <span className="font-normal">
          0{currencySymbol} out of {wants}
          {currencySymbol} budget
        </span>
      </span>
      <span className="text-sm font-semibold">
        Savings:{' '}
        <span className="font-normal">
          0{currencySymbol} out of {savings}
          {currencySymbol} budget
        </span>
      </span>
      {/* TODO add here budget health */}
    </div>
  )
}

export default BudgetStatistics
