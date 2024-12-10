import Collapse from "@/components/Collapse";


const BudgetPage = ({budgets}) => {
    return budgets.map(budget => {
        return (
            <Collapse title={budget.title}>
                {budget.content}
            </Collapse>
        )
    })
};

export default BudgetPage;