import { getAllCryptBudget } from '@/api';
import Box from '@/components/Box';
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {
    const {data, isLoading} = useQuery({ queryKey: ['cryptoBudget'], queryFn: getAllCryptBudget })

    return (
        <div>
            {isLoading ? 'Loading...' : null}
            {!isLoading && (
                <Box>
                Crypto balance:<br/>
                { data[0]?.data + data[1]?.data}
            </Box>
            )}
            
        </div>
    );
};

export default Dashboard;