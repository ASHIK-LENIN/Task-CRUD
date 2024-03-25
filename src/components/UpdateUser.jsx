// components/UpdateUser.js
import React, { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('https://interview-plus.onrender.com/api/update-user', {
        name,
        password
      }, {
        headers: {
          'x-access-token': token
        }
      });
      // Handle successful update
    } catch (error) {
      console.error('User update failed:', error);
    }
  };

  return (
    <div class=" text-purple-500 p-4 rounded-lg text-center mt-20"> 
    <h2 class="text-xl font-bold mb-4">Update User</h2> 
    <form onSubmit={handleSubmit} class="bg-white shadow-md rounded-lg p-8 max-w-sm w-full mx-auto"> 
    
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} class="appearance-none bg-gray-200 border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-3" /> 
    
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} class="appearance-none bg-gray-200 border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" /> 
    
    <button type="submit" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full"> Update </button> 
    </form> 
    </div>
  );
}

export default UpdateUser;
