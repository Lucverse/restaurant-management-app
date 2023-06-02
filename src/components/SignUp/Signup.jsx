import React, { useState } from 'react';
import './Signup.css';
import { API_URL } from '../../types/types';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      password,
      userType,
      username
    };
    alert(data.message);
    setFullName('');
    setEmail('');
    setPassword('');
    setUserType('');
    setUsername('');
    navigate('/');
  }
return (
  <form onSubmit={handleSubmit} className='signup-form'>
    <h3>Signup Page</h3>
    <label>
      Full Name:
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
    </label>
    <label>
      Email:
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </label>
    <label>
      Username:
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </label>
    <label>
      Password:
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </label>
    <label>
      User Type:
      <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
        <option value="">Select User Type</option>
        <option value="customer">Customer</option>
        <option value="staff">Staff</option>
      </select>
    </label>
    <button type="submit">Sign Up</button>
  </form>
);
}
export default SignupForm;