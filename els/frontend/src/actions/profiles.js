import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { GET_profiles, GET_userlists, EDIT_profile, EDIT_learned } from './types';

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

export const editprofile = (profile) => (dispatch, getState) => {
  axios
    .patch(`/api/users/${profile.id}/`, profile, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ editprofile: 'profile Edit' }));
      dispatch({
        type: EDIT_profile,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const updatelearned = (profile) => (dispatch, getState) => {
  axios
    .patch(`/api/profiles/${profile.id}/`, profile, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ updatelearned: 'learned Edit' }));
      dispatch({
        type: EDIT_learned,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
