import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { GET_profiles, DELETE_profile } from './types';

// GET profiles
export const getprofiles = () => (dispatch, getState) => {
  axios
    .get('/api/profiles/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_profiles,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
