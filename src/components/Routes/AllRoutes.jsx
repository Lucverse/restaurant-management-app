// Import necessary dependencies
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import your components for different pages
import LoginPage from '../Login/LoginPage';
import SignupPage from '../Login/SignupPage';
import OwnerHomePage from '../Home/OwnerHomePage.jsx';
import CustomerHomePage from '../Home/CustomerHomePage.jsx';
import Pagenotfound from '../Pageoutfound/Pagenotfound';

function AllRoutes() {
  // Access Redux store for authentication status and user role
  const isAuthenticated = false; // Replace with actual value from Redux store
  const userRole = "owner"; // Replace with actual value from Redux store

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/*" element={<Pagenotfound/>}/>

      {isAuthenticated && userRole === 'owner' && (
        <Route path="/owner-home" element={<OwnerHomePage/>} />
      )}
      {isAuthenticated && userRole === 'customer' && (
        <Route path="/customer-home" element={<CustomerHomePage/>} />
      )}

      {!isAuthenticated && (
        <Route path="/" element={<LoginPage/>} />
      )}
    </Routes>
  );
}

export default AllRoutes;
