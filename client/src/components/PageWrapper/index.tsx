import {Header} from '../Header';
import Container from '../Container';

const PageWrapper = ({children}) => {
    return (
        <div className='flex align-top'>
            <div className='w-[200px] max-w-[200px] p-0'></div>
            <div className='flex-1'>
                <Header />
                <div className='pt-12 pb-16 min-h-[92vh]'>
                    <Container>
                    {children}
                    </Container>
                </div>

            </div>
        </div>
    );
};

export default PageWrapper;