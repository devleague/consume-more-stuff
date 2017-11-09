import { LOAD_CATEGORIES } from '../actions/categories';

const initialState = [];

const categories = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CATEGORIES:
      return [ ...action.categories ];
    default:
      return state
  }
}

export default categories;