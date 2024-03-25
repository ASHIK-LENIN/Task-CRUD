
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const  Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://interview-plus.onrender.com/api/login', {
        email,
        password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/items')
      
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="text-center mb-10 mt-32">
         <h2 className="text-4xl font-bold mb-4 text-purple-500">Login</h2> 

         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full mx-auto"> 
         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none bg-gray-200 border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-[13px]" /> 
         
         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none bg-gray-200 border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" /> 
         
         <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full"> Login </button> 

         <p> Already have an account ?  </p>
         <Link to={'/register'}>
         <span className='text-blue-600 underline'>Register</span>
         </Link>
         </form> 
         </div>
  );
}

export default Login;
