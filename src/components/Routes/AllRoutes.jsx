import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CustomerHomePage from '../Home/CustomerHomePage.jsx';
import Pagenotfound from '../Pageoutfound/Pagenotfound';
import SignupForm from '../SignUp/Signup';
import LoginForm from '../Login/Login.jsx';
import Account from '../Account/Account.js';
import StaffHomePage from '../Home/StaffHomePage.jsx';

function AllRoutes() {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
  const userRole = useSelector(state => state.auth.user?.userType || null);
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/*" element={<Pagenotfound />} />

      {isAuthenticated && userRole === 'staff' && (
        <Route path="/" element={<StaffHomePage />} />
      )}
      {isAuthenticated && userRole === 'customer' && (
        <Route path="/" element={<CustomerHomePage />} />
      )}

      {!isAuthenticated && (
        <Route path="/" element={<LoginForm />} />
      )}
      {!isAuthenticated && (
        <Route path="/*" element={<LoginForm />} />
      )}
      {isAuthenticated && (
        <Route path="/account" element={<Account />} />
      )}
    </Routes>
  );
}
export default AllRoutes;
