import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { ADD_question } from './types';

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
