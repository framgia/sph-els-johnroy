import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { GET_activitylogs, ADD_activitylog } from './types';

// GET activity logs
export const getactivitylogs = () => (dispatch, getState) => {
  axios
    .get('/api/activitylogs/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_activitylogs,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD activity logs
export const addactivitylogs = (activitylog) => (dispatch, getState) => {
  axios
    .post('/api/activitylogs/', activitylog, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addactivitylogs: 'activitylog Added' }));
      dispatch({
        type: ADD_activitylog,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};