import { LOAD_USERS } from '../actions/users.actions';

const initialState = [];

const userList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_USERS:
      return [...action.users];

    default:
      return state;
  }
};

export default userList;