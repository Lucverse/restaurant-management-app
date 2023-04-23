import './navigation.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navigation() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <nav className="primary-navigation">
            {isLoggedIn ? <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/orders">Order History </NavLink></li>
                <li><NavLink to="/account">Account</NavLink></li>
            </ul> :
                <ul>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/signup">Sign up</NavLink></li>
                </ul>
            }

        </nav>
    );
}

export default Navigation;
