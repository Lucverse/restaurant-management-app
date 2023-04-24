import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './sidebar.css'

function Sidebar() {
    const [isActive, setIsActive] = useState(false);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const toggleActive = () => setIsActive(!isActive);

    return (
        <div className='sidebar'>
            <input type="checkbox" id="active" checked={isActive} onChange={toggleActive} />
            <label htmlFor="active" className="menu-btn"><FontAwesomeIcon icon={faBars} /></label>
            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                {isLoggedIn ? <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/orders">History</NavLink></li>
                    <li><NavLink to="/account">Account</NavLink></li>
                </ul> :
                    <ul>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Sign up</NavLink></li>
                    </ul>
                }
            </div>
        </div>
    );
}

export default Sidebar;
