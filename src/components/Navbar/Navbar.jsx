import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Login',
        path: '/login',
    },
    {
        title: 'Sign Up',
        path: '/signup',
    },
    {
        title: 'Account',
        path: '/account',
    },
];

function Navbar() {
    return (
        <nav className="nav">
            <NavLink to="/" exact="true" >
                <span style={{ fontSize: "20px", fontWeight: 'bold' }}>Restaurant Management App </span>
            </NavLink>
            <div className="nav-links">
                {routes.map((route, index) => (
                    <NavLink key={index + 1} to={route.path} activeclassname="activeclassname" exact="true">
                        {route.title}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
