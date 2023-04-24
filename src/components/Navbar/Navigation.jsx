import './navigation.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser,faCartShopping,faHistory,faUserLarge } from '@fortawesome/free-solid-svg-icons';
function Navigation() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <nav className='nav-bar'>
            {
                isLoggedIn ?
                    <ul className="menuItems">
                        <NavLink to='/' activeclassname='active-link' data-item='Home'><FontAwesomeIcon icon={faHomeUser} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} /></NavLink>
                        <NavLink to='/cart' activeclassname='active-link' data-item='cart'><FontAwesomeIcon icon={faCartShopping} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} /></NavLink>
                        <NavLink to='/orders' activeclassname='active-link' data-item='orders'><FontAwesomeIcon icon={faHistory} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} /></NavLink>
                        <NavLink to='/account' activeclassname='active-link' data-item='account'><FontAwesomeIcon icon={faUserLarge} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} /></NavLink>
                    </ul>
                    :
                    <ul className="menuItems">
                        <NavLink to='/login' activeclassname='active-link' data-item='Login'>Login</NavLink>
                        <NavLink to='/signup' activeclassname='active-link' data-item='signup'>Signup</NavLink>
                    </ul>
            }
        </nav>
    );
}

export default Navigation;
