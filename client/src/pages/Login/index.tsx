import { login } from '@/api';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { useMutation } from '@tanstack/react-query';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {mutate} = useMutation({
      mutationFn: login,
      onSuccess:() => {
        navigate('/')
      },
      onError: ({response}) => {
        setError(response.data.message);
      }
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      mutate({email, password});
    }

  return (
    <div className='h-lvh flex items-center justify-center flex-col'>
        <Container>
         <div className='w-full max-w-[450px] rounded-3xl justify-center items-center flex p-12 bg-white border border-[#e9eaf3] shadow-default-shadow flex-col ml-auto mr-auto'>
            <h3 className='text-2xl mb-5'>Welcome to <b>BudgetWise</b></h3>
            <form onSubmit={handleSubmit} className='flex flex-col w-full'>
                <input className='transition text-sm rounded-[52px] border border-[#e9eaf3] bg-[#f7f9fc] h-[38px] min-h-[52px] py-4 px-6 outline-none focus:border-blue-500 mb-3' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input  className='transition text-sm rounded-[52px] border border-[#e9eaf3] bg-[#f7f9fc] h-[38px] min-h-[52px] py-4 px-6 outline-none focus:border-blue-500 mb-3' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {error && <div className="flex w-full mb-3 text-red-700">{error}</div>}
                <Button type="submit">Login</Button>
            </form>
         </div>
        </Container>
    </div>
    );
};

export default Login;