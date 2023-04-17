import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER, API_URL } from '../types/types';

export const loginSuccess = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    fetch('http://localhost:3002', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.email === email && user.password === password);
        if (user) {
          console.log('Login successful:', user);
          const loggedInUser = { ...user, isLoggedIn: true };
          dispatch(loginSuccess(loggedInUser));
        } else {
          console.error('Invalid email or password');
          dispatch(loginFailure('Invalid email or password'));
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        dispatch(loginFailure('Error logging in'));
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER
    });
  };
};
