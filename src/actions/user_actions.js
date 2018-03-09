import axios from 'axios';

export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const EDIT_USER = 'EDIT_USER';

export const registerUser = (user, redirectCallback) => {
  return dispatch => {
    return axios.post('/api/register', {
      email: user.email,
      username: user.username,
      password: user.password
    })
    .then(user => {
      dispatch({
        type: ADD_USER,
        newUser: user.data
      });
      redirectCallback();
    })
    .catch(err => {
      console.log('err', err);
      return dispatch({
        type: ADD_USER,
        user: {}
      });
    });
  };
};

export const logoutUser = (redirectCallback) => {
  localStorage.clear()
  return dispatch => {
    return axios.get('/api/logout')
    .then(result => {
      dispatch({
        type: LOGIN_USER,
        user: {}
      });
      redirectCallback()
    })
    .catch(err => {
      console.log('err', err);
      return dispatch({
        type: LOGIN_USER,
        user: {}
      });
    });
  }
}
export const loginUser = (user, redirectCallback) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: '/api/login',
      data: {
        username: user.username,
        password: user.password
      },
      withCredentials: true
    })
    .then(user => {
      console.log('user', user);
      dispatch({
        type: LOGIN_USER,
        user: user.data
      });
      redirectCallback(user.data.user);
    })
    .catch(err => {
      console.log('err', err);
      return dispatch({
        type: LOGIN_USER,
        user: {}
      });
    });
  };
};

export const editUser = (user, redirectCallback) => {
  return dispatch => {
    return axios.put(`/api/users/${user.id}/settings`, {
      user
    })
    .then(user => {
      console.log('user', user);
      dispatch({
        type: EDIT_USER,
        user: user.data
      });
      redirectCallback(user.data.user);
    })
    .catch(err => {
      console.log('err', err);
      return dispatch({
        type: EDIT_USER,
        user: {}
      });
    });
  };
};