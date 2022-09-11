import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { ADD_question, GET_questions, EDIT_question, DELETE_question } from './types';

// ADD question
export const addquestion = (question) => (dispatch, getState) => {
  axios
    .post('/api/questions/', question, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addquestion: 'question Added' }));
      dispatch({
        type: ADD_question,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// GET question
export const getquestions = () => (dispatch, getState) => {
  axios
    .get('/api/questions/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_questions,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// EDIT question
export const editquestion = (question) => (dispatch, getState) => {
  axios
    .patch(`/api/questions/${question.id}/`, question, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ editquestion: 'question Edit' }));
      dispatch({
        type: EDIT_question,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deletequestion = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/questions/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deletequestion: 'question Deleted' }));
      dispatch({
        type: DELETE_question,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};