import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import '../Login/LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const user = useSelector(state=> state.auth.user);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user,navigate]);

  return (
    <form onSubmit={handleSubmit} className='login-page'>
      <h3>Login Page</h3>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default LoginForm;
