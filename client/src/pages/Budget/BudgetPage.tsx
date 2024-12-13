import Collapse from '@/components/Collapse'
import { useBudgetPage } from './useBudgetPage'
import Spinner from '@/components/Spinner'
import BudgetTableHeader from '@/components/BudgetTableHeader'
import BudgetNavigation from '../AddBudget/BudgetNavigation'
import BudgetStatistics from '@/components/BudgetStatistics'
import TableRow from '@/components/Table/TableRow'
import { CURRENCIES, currenciesSymbols } from '../AddBudget/constants'

const BudgetPage = () => {
  const {
    budgets,
    isLoading,
    selectedBudgetSection,
    setSelectedBudgetSection,
  } = useBudgetPage()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    )
  }

  return budgets?.map((budget) => {
    const { title, _id, budgetType, items, currency } = budget
    console.log(budget)
    return (
      <Collapse title={`${title} (${budgetType})`} key={_id}>
        <>
          <BudgetStatistics formData={budget} />
          <BudgetNavigation
            setSelectedBudgetSection={setSelectedBudgetSection}
            selectedBudgetSection={selectedBudgetSection}
          />
          <BudgetTableHeader />
          {items[selectedBudgetSection].map(
            ({ icon, title, amount, description }, index) => {
              return (
                <TableRow key={index} style={{ zIndex: 1000 - index }}>
                  <div className="flex items-center font-semibold uppercase text-xs z-50 col-span-1">
                    <i className={`${icon} text-lg hover:text-blue-500 p-1`} />
                  </div>
                  <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-5">
                    <input
                      type="text"
                      className={`py-2 px-3 rounded bg-white w-full`}
                      disabled={true}
                      value={title}
                    />
                  </div>
                  <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-2">
                    <input
                      type="text"
                      className={`py-2 px-3 rounded bg-white w-full`}
                      disabled={true}
                      value={`${amount} ${currenciesSymbols[currency]}`}
                    />
                  </div>
                  <div className="flex items-center font-semibold uppercase text-xs z-10 col-span-3">
                    <input
                      type="text"
                      className={`py-2 px-3 rounded bg-white w-full`}
                      disabled={true}
                      value={description}
                    />
                  </div>
                </TableRow>
              )
            },
          )}
        </>
      </Collapse>
    )
  })
}

export default BudgetPage
