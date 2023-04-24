import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, updateUser } from '../../actions/authActions';
import './Account.css';
import { FaLongArrowAltUp, FaPencilAlt } from "react-icons/fa";

function Account() {
    const [user, setUser] = useState(useSelector(state => state.auth.user));
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className='account-info-page'>
            <h1>Hello {user.username}</h1>
            <div className="account-info">
                <div>
                    <img src='https://rkmsm.org/events/images/photothumb.jpg' alt='profile-pic' className='profile-pic' />
                </div>
                <div>
                    <p>Name: {user.fullName}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Member since: {user.createdAt}</p>
                    <div className='edit-account' onClick={() => { console.log('yes') }}>
                        <FaPencilAlt />
                    </div>
                    <button onClick={handleLogout} className='logout-button'>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Account;
