import { ADD_USER, LOGIN_USER, EDIT_USER  } from '../actions/user_actions';

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ADD_USER:
    return { ...state.user, newUser: action.newUser };
  case LOGIN_USER:
    return { ...state.user, user: action.user };
  case EDIT_USER:
    return { ...state.user, user: action.user };
  default:
    return state;
  }
}