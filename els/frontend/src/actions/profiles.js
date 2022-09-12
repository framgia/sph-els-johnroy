import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { GET_profiles, GET_userlists, EDIT_profile, EDIT_learned, GET_viewprofile, GET_userfollows, DELETE_follows, ADD_follow } from './types';


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

export const viewprofile = (id) => (dispatch, getState) => {
  axios
    .get(`/api/userlists/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_viewprofile,
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

export const getfollows = () => (dispatch, getState) => {
  axios
    .get('/api/userfollows/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_userfollows,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addfollowing = (follow) => (dispatch, getState) => {
  axios
    .post('/api/userfollows/', follow, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addfollowing: 'following Added' }));
      dispatch({
        type: ADD_follow,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const unfollow = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/userfollows/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ unfollow: 'unfollowed User' }));
      dispatch({
        type: DELETE_follows,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};