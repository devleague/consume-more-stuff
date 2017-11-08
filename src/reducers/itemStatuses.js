import { LOAD_ITEMSTATUSES } from '../actions/itemStatuses';

const initialState = [];

const itemStatuses = (state = initialState, action) => {
  switch(action.type){
    case LOAD_ITEMSTATUSES:
      return [ ...action.itemStatuses ];
    default:
      return state
  }
}

export default itemStatuses;