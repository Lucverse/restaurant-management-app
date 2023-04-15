import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from '../Login/LoginPage';
import SignupPage from '../Login/SignupPage';
import OwnerHomePage from '../Home/OwnerHomePage.jsx';
import CustomerHomePage from '../Home/CustomerHomePage.jsx';
import Pagenotfound from '../Pageoutfound/Pagenotfound';

function AllRoutes() {
  const isAuthenticated = true;
  const userRole = "customer";

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/*" element={<Pagenotfound />} />

      {isAuthenticated && userRole === 'owner' && (
        <Route path="/" element={<OwnerHomePage />} />
      )}
      {isAuthenticated && userRole === 'customer' && (
        <Route path="/" element={<CustomerHomePage />} />
      )}

      {!isAuthenticated && (
        <Route path="/" element={<LoginPage />} />
      )}
    </Routes>
  );
}
export default AllRoutes;
