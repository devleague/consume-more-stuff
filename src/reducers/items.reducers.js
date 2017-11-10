import { LOAD_ITEMS, ADD_ITEM } from '../actions/items.actions';
const initialState = [];

const itemList = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_ITEMS:
      return [ ...action.items ];

    case ADD_ITEM:
      return [ ...state, action.newItem ];
 
    default:
      return state;
  }
};

export default itemList;
