import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, updateUser } from '../../actions/authActions'; // Import the updateUser action from your authActions file
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
        <div className="account-info">
            <h1>Hello {user.username}</h1>
            {isEditing ? (
                <>
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
                </>
            ) : (
                <>
                    <p>Name: {user.fullName}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Member since: {user.createdAt}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Account;
