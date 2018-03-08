import { LOAD_ITEM, EDIT_ITEM}  from '../actions/edit_item';

const initialState = {
  item: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEM:
      return {...state, item: action.item}
    case EDIT_ITEM:
      return {...state, item: action.item}
    default:
      return state;
  }
}