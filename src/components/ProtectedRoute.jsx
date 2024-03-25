// components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('https://interview-plus.onrender.com/api/protected', {
            headers: {
              'x-access-token': token
            }
          });
          if (response.status === 200) {
            setIsLoggedIn(true);
          }
        } catch (error) {
          console.error('User not authorized:', error);
        }
      }
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <div>Loading...</div>
        ) : isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
