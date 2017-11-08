import Axios from 'axios';

const listOfStatuses = '/api/statuses'; // URL to POST to

export const LOAD_STATUSES = 'LOAD_STATUSES';
export const ERROR = 'ERROR';

//GET all statuses
export const loadStatuses = () => {
  return (dispatch) => {
    return Axios.get(listOfStatuses)
    .then(statuses => {

      dispatch({
        type: LOAD_STATUSES,
        statuses: statuses.data
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