import React from 'react';
import { Route, Routes } from 'react-router-dom';

import OwnerHomePage from '../Home/OwnerHomePage.jsx';
import CustomerHomePage from '../Home/CustomerHomePage.jsx';
import Pagenotfound from '../Pageoutfound/Pagenotfound';
import SignupForm from '../SignUp/Signup';
import LoginForm from '../Login/Login.jsx';

function AllRoutes() {
  const isAuthenticated = true;
  const userRole = "customer";

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/*" element={<Pagenotfound />} />

      {isAuthenticated && userRole === 'owner' && (
        <Route path="/" element={<OwnerHomePage />} />
      )}
      {isAuthenticated && userRole === 'customer' && (
        <Route path="/" element={<CustomerHomePage />} />
      )}

      {!isAuthenticated && (
        <Route path="/" element={<LoginForm />} />
      )}
    </Routes>
  );
}
export default AllRoutes;
