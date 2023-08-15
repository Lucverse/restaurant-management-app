import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
function Sidebar({ isOpen, onClose }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
            </div>
            <ul className="sidebar-menu">
                <NavLink to="/" className="sidebar-link" onClick={onClose}>
                    Home
                </NavLink>
                <NavLink to="/orders" className="sidebar-link" onClick={onClose}>
                    Orders
                </NavLink>
                <NavLink to="/recipe" className="sidebar-link" onClick={onClose}>
                    Recipe
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;
