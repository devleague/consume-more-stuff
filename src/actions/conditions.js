const axios = require('axios');

export const LOAD_CONDITIONS = 'LOAD_CONDITIONS';

export const loadConditions = () => {
  return function(dispatch){
    return axios.get('/api/conditions')
    .then( conditions => {
      dispatch({
        type: LOAD_CONDITIONS,
        conditions: conditions.data
      });
    });
  }
}