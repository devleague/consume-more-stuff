import Axios from 'axios';

const listOfUsers = '/api/users'; // URL to POST to

export const LOAD_USERS = 'LOAD_USERS';
export const ERROR = 'ERROR';

//GET all users
export const loadUsers = () => {
  return (dispatch) => {
    return Axios.get(listOfUsers)
    .then(users => {

      dispatch({
        type: LOAD_USERS,
        users: users.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
  };
};
