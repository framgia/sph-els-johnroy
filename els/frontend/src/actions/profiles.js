import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { GET_profiles, GET_userlists } from './types';

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

// GET userlists
export const getuserlists = () => (dispatch, getState) => {
    axios
      .get('/api/userlists/', tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_userlists,
          payload: res.data,
        });
      })
      .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
  };
  