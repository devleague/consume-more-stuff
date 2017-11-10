import { LOAD_USERS } from '../actions/users.actions';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../actions/auth.actions';

const initialState = [];

const userList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_USERS:
      return [...action.users];

    case REGISTER_USER:
      return [...state, action.newUser];

    case LOGIN_USER:
      return state.map(user => {
        if (user.id === action.userDetails.id) {
        localStorage.setItem('loggedin', true);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('username', user.username);
          return Object.assign({}, user, {
            isLoggedIn : true
          });
        }
          return user;
      });

    case LOGOUT_USER:
      return state.map(user => {
        console.log(user, "USER REDUCER");
        if (user.id === action.userDetails.id) {
          localStorage.setItem('loggedin', false);
          localStorage.setItem('userId', 12);
          localStorage.setItem('username', null);
          return Object.assign({}, user, {
            isLoggedIn : false
          });
        }
        return user;
      });

    default:
      return state;
  }
};

export default userList;