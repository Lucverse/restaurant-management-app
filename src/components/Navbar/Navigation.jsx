import './navigation.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navigation() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <nav className='nav-bar'>
            <ul className="menuItems">
                <li><NavLink to='/' data-item='Home'>Home</NavLink></li>
                <li><NavLink to='/cart' data-item='cart'>Cart</NavLink></li>
                <li><NavLink to='/orders' data-item='orders'>Orders</NavLink></li>                
                <li><NavLink to='/account' data-item='account'>Account</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;
