import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const notLoggedInLinks = () => {
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

    const LoggedInLinks = () => {
        return (
            <>
                <NavLink to="/orders">
                    Order History
                </NavLink>
                <NavLink to="/account">
                    Account
                </NavLink>
            </>
        );
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
                {isLoggedIn ? LoggedInLinks() : notLoggedInLinks()}
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
