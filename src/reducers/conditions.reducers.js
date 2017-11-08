import { LOAD_CONDITIONS } from '../actions/conditions.actions';

const initialState = []

const conditionList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_CONDITIONS:
      return [...action.conditions]
    default:
      return state
  }
}

export default conditionList;