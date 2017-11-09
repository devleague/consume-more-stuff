import { LOAD_CONDITIONS } from '../actions/conditions';

const initialState = [];

const conditions = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CONDITIONS:
      return [ ...action.conditions ];
    default:
      return state
  }
}

export default conditions;