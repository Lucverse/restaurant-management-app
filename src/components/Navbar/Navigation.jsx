import './navigation.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser, faCartShopping, faHistory, faUserLarge } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartLength = cartItems ? cartItems.length : 0;
    return (
        <nav className='nav-bar'>
            {
                isLoggedIn ?
                    <ul className="menuItems">
                        <NavLink to='/' activeclassname='active-link' data-item='Home'>
                            <FontAwesomeIcon icon={faHomeUser} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} />
                        </NavLink>
                        <NavLink to='/cart' activeclassname='active-link' data-item='Cart' className='cart-link'>
                            <span className='cart-length'>
                                {cartLength}
                            </span>
                            <FontAwesomeIcon icon={faCartShopping} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} />
                        </NavLink>
                        <NavLink to='/orders' activeclassname='active-link' data-item='Orders'>
                            <FontAwesomeIcon icon={faHistory} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} />
                        </NavLink>
                        <NavLink to='/account' activeclassname='active-link' data-item='Profile'>
                            <FontAwesomeIcon icon={faUserLarge} style={{ mixBlendMode: 'multiply', fontSize: '20px' }} />
                        </NavLink>
                    </ul>
                    :
                    <ul className="menuItems">
                        <NavLink to='/login' activeclassname='active-link' data-item=''>
                            Login
                        </NavLink>
                        <NavLink to='/signup' activeclassname='active-link' data-item=''>
                            Signup
                        </NavLink>
                    </ul>
            }
        </nav>
    );
}

export default Navigation;
