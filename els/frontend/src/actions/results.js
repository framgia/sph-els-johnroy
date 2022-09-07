import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { GET_results, ADD_result } from './types';

// GET results
export const getresults = () => (dispatch, getState) => {
  axios
    .get('/api/results/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_results,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD results
export const addresult = (result) => (dispatch, getState) => {
  axios
    .post('/api/results/', result, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addresult: 'result Added' }));
      dispatch({
        type: ADD_result,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
