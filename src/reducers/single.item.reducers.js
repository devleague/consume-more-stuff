import { LOAD_SINGLE_ITEM } from '../actions/items.actions';

const initialState = {
  Category : '',
  Condition : '',
  Status : '',
  User : ''
};

const singleItem = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_SINGLE_ITEM:
      return Object.assign({}, state, action.item);
      
  default:
      return state;
  }
};

export default singleItem;