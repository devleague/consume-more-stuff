const axios = require('axios');

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = () => {
  return function(dispatch){
    return axios.get('/api/categories')
    .then( categories => {
      dispatch({
        type: LOAD_CATEGORIES,
        categories: categories.data
      });
    });
  }
}