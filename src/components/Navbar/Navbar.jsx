import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const userRole = useSelector(state => state.auth.user?.userType || null);

    const renderLoginSignupLinks = () => {
        return (
            <>
                <NavLink to="/login">
                    Login
                </NavLink>
                <NavLink to="/signup">
                    Sign Up
                </NavLink>
            </>
        );
    };

    const renderAccountLink = () => {
        return (
            <NavLink to="/account">
                Account
            </NavLink>
        );
    };

    const renderUserRoleLinks = () => {
        if (userRole === 'owner') {
            return (
                <NavLink to="/restaurant-orders">
                    Restaurant Orders
                </NavLink>
            );
        } else if (userRole === 'customer') {
            return (
                <NavLink to="/customer-orders">
                    Customer Orders
                </NavLink>
            );
        }
        return null;
    };

    return (
        <nav className="nav">
            <NavLink to="/">
                <span style={{ fontSize: "20px", fontWeight: 'bold' }}>Restaurant Management App </span>
            </NavLink>
            <div className="nav-links">
                <NavLink to="/">
                    Home
                </NavLink>
                {renderUserRoleLinks()}
                {isLoggedIn ? renderAccountLink() : renderLoginSignupLinks()}
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
