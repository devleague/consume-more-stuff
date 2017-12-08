import { LOAD_STATUSES } from '../actions/statuses.actions';

const initialState = []

const statusList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_STATUSES:
      return [...action.statuses]
    default:
      return state
  }
}

export default statusList;