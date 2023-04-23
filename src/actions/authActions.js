import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER, UPDATE_USER, API_URL } from '../types/types';

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
    fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(userData => {
        const user = userData.find(user => user.email === email && user.password === password);
        if (user && user.userType === 'staff') {
          fetch(`${API_URL}/restaurants`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(restaurantData => {
              const restaurantName = restaurantData.filter(item => item.staff.includes(user.username))[0].restaurantName;
              const loggedInUser = { ...user, isLoggedIn: true, restaurantName: restaurantName };
              dispatch(loginSuccess(loggedInUser));
            })
            .catch(error => {
              console.error('Error fetching restaurant data:', error);
              dispatch(loginFailure('Error fetching restaurant data'));
            });
        } else if (user) {
          // If the user type is not staff, dispatch user info only
          const loggedInUser = { ...user, isLoggedIn: true };
          dispatch(loginSuccess(loggedInUser));
        } else {
          // If the user is not found, dispatch login failure with error message
          dispatch(loginFailure('User not found'));
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
