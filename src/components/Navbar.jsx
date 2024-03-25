// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-purple font-semibold text-lg">Listings Page</span>
          </div>
          <div className="md:flex items-end hidden">
            
            <Link to={'/profile'} >
            <span className='text-white font-bold text-lg bg-purple-600 px-2 py-1 rounded-lg'>Profile</span>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
