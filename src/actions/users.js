const axios = require('axios');

export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';

export const loadUsers = () => {
  return function(dispatch){
    return axios.get('/api/users')
    .then( users => {
      dispatch({
        type: LOAD_USERS,
        users: users.data
      });
    });
  }
}

export const addUser = (newUser) => {
  return function(dispatch){
    return axios.post('/api/register', newUser)
    .then( user => {
      dispatch({
        type: ADD_USER,
        user: user.data
      });
    });
  }
}

export const editUser = (newInfo) => {
  return function(dispatch){
    return axios.put(`/api/users/${newInfo.id}`, newInfo)
    .then (user => {
      dispatch({
        type: EDIT_USER,
        user: user.data
      });
    });
  }
}