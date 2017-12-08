import { LOAD_SINGLE_USER } from '../actions/users.actions';
import { REGISTER_USER,
         LOGIN_USER,
         LOGOUT_USER
       } from '../actions/auth.actions';

const initialState = { Items : [] };

const singleUser = (state = initialState, action) => {
  switch (action.type){
    case LOAD_SINGLE_USER:
      return Object.assign({}, state, action.user);

    case REGISTER_USER:
      if (action.response.success) {
        localStorage.setItem('registered', true);
      }

      return Object.assign({}, state, initialState);

    case LOGIN_USER:
      const userDetails = action.userDetails;
      let newState = {};
      console.log(userDetails);
      if (userDetails.success) {
        newState = action.userDetails;

        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userId', userDetails.id);
        localStorage.setItem('username', userDetails.username);
        localStorage.setItem('role', userDetails.role);

      } else {
        newState = initialState;
      }

      return Object.assign({}, state, newState);

    case LOGOUT_USER:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
};

export default singleUser;