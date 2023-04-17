import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER, UPDATE_USER, API_URL } from '../types/types';

// Action creator for successful login
export const loginSuccess = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    });
  };
};

// Action creator for login failure
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

// Action creator for logging in user
export const loginUser = (email, password) => {
  return (dispatch) => {
    fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.email === email && user.password === password);
        if (user) {
          // console.log('Login successful:', user);
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

// Action creator for logging out user
export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER
    });
  };
};

// Action creator for updating user information
export const updateUser = (userId, updatedUser) => {
  return (dispatch) => {
    fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
      .then(response => response.json())
      .then(data => {
        console.log('User updated successfully:', data);
        dispatch({
          type: UPDATE_USER,
          payload: data
        });
      })
      .catch(error => {
        console.error('Error updating user:', error);
        // You can dispatch an error action or handle the error as needed
      });
  };
};
