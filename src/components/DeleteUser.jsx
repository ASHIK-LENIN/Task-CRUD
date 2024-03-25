// components/DeleteUser.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const   DeleteUser = () => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('https://interview-plus.onrender.com/api/delete-user', {
        headers: {
          'x-access-token': token
        }
      });
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('User deletion failed:', error);
    }
  };

  return (
    <div class="text-purple-500 text-center p-4 rounded-lg mt-10 bg-gray-200 "> 
    <h2 class="text-xl font-bold mb-6">Delete User</h2> 
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg " 
    onClick={handleDelete}> Delete </button> 
    </div>
  );
}

export default DeleteUser;
