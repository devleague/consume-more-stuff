import { LOAD_CATEGORIES } from '../actions/categories.actions';

const initialState = []

const categoryList = (state = initialState, action) => {

  switch (action.type){
    case LOAD_CATEGORIES:
      return [...action.categories]
    default:
      return state
  }
}

export default categoryList;