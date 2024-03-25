
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://interview-plus.onrender.com/api/register', {
        name,
        email,
        password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div class=" text-center mb-10 mt-32">
         <h2 class="text-3xl font-bold mb-4 text-purple-500">Register</h2> 
         <form onSubmit={handleSubmit} class="bg-white shadow-md rounded-lg p-8 max-w-sm w-full mx-auto"> 
        
         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} class="appearance-none bg-gray-200 border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-3" /> 
         
         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} class="appearance-none bg-gray-200 border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" /> 
         
         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} class="appearance-none bg-gray-200 border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
         
          <button type="submit" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full"> Register </button>

          <p>Have an account ? </p> 
          <Link to={'/'}>
          <span className='text-blue-600 underline'>Login</span>

          </Link>
          </form> 
          </div>
  );
}

export default Register;
