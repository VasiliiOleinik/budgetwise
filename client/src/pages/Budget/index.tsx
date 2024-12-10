import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import BudgetPage from './BudgetPage';

export const Budget = () => {
    const budgets = [{
        title: 'Budget 1',
        content: 'Budget 1 content'
    },
    {
        title: 'Budget 2',
        content: 'Budget 2 content'
    },
    {
        title: 'Budget 3',
        content: 'Budget 3 content'
    }]
    return (
        <div>
            <div className='flex items-center justify-between mb-4'>
                <PageTitle>Budget</PageTitle>
                <Button>Add budget</Button>
            </div>
            <div className='flex flex-col w-full'>
                <BudgetPage budgets={budgets}/>
            </div>
        </div>
    );
}