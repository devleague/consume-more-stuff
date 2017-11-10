import Axios from 'axios';

const listOfConditions = '/api/conditions'; // URL to POST to

export const LOAD_CONDITIONS = 'LOAD_CONDITIONS';
export const ERROR = 'ERROR';

//GET all conditions
export const loadConditions = () => {
  return (dispatch) => {
    return Axios.get(listOfConditions)
    .then(conditions => {

      dispatch({
        type: LOAD_CONDITIONS,
        conditions: conditions.data
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