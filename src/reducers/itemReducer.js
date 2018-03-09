import { LOAD_ITEMS , CREATE_ITEM, LOAD_SINGLE_ITEM, GET_USER_ITEMS, GET_CATEGORY } from '../actions/itemActions';

const initialState = {
  items: [],
  userItems: [],
  category: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_ITEM:
      return {...state, newItem: action.item}

    case LOAD_ITEMS:
      return {...state, items: action.items}

    case LOAD_SINGLE_ITEM:
      return {...state, item: action.item}

    case GET_USER_ITEMS:
      return {...state, items: action.userItems}

    case GET_CATEGORY:
      return {...state, category: action.category}

    default:
      return state;
  }
}
