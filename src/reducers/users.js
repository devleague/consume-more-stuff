import { LOAD_USERS, ADD_USER, EDIT_USER } from '../actions/users';

const initialState = [];

const users = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USERS:
      return [ ...action.users ];
    case ADD_USER:
      return [ ...state, action.user ];
    case EDIT_USER:
      let index = state.findIndex((user) => {
        return user.id === action.user[1].id
      });
      return [ ...(state.slice(0, index)), action.user[1], ...(state.slice((index + 1), state.length))];
    default:
      return state
  }
}

export default users;