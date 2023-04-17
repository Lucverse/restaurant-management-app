import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, updateUser } from '../../actions/authActions';
import './Account.css';

function Account() {
    const [user, setUser] = useState(useSelector(state => state.auth.user));
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    const handleUpdate = () => {
        dispatch(updateUser(user));
        setIsEditing(false);
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <div className='account-info-page'>
            <h1>Hello {user.username}</h1>
            {isEditing && (
                <div className='account-info-overlay'>
                    <div className='account-info-edit'>
                        <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="fullName"
                            value={user.fullName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="password"
                            value={user.password}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleUpdate}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                        <div />
                    </div>
                </div>
            )}
            {!isEditing && (
                <div className="account-info">
                    <img src='https://rkmsm.org/events/images/photothumb.jpg' alt='profile-pic'/>
                    <div>
                        <p>Name: {user.fullName}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                        <p>Member since: {user.createdAt}</p>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                </div>
            )}
            <button onClick={handleLogout} className='logout-button'>Logout</button>
        </div>
    );
}

export default Account;
