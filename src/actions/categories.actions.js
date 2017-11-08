import Axios from 'axios';

const listOfCategories = '/api/categories'; // URL to POST to

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const ERROR = 'ERROR';

//GET all categories
export const loadCategories = () => {
  return (dispatch) => {
    return Axios.get(listOfCategories)
    .then(categories => {

      dispatch({
        type: LOAD_CATEGORIES,
        categories: categories.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
  };
};