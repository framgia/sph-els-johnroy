import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { GET_activitylogs } from './types';

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
