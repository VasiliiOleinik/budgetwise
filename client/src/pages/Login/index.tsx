import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/auth/login', { email, password }, { withCredentials: true });
      navigate('/')
    } catch (err) {
      console.log('err', err.response.data.message)
      setError('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
    );
};

export default Login;