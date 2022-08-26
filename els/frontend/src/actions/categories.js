import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from '../utils/helpers/authHelper';

import { GET_categories, DELETE_category, ADD_category, EDIT_category, EDIT_category } from './types';

// GET categories
export const getcategories = () => (dispatch, getState) => {
  axios
    .get('/api/categories/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_categories,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE category
export const deletecategory = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/categories/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deletecategory: 'category Deleted' }));
      dispatch({
        type: DELETE_category,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD category
export const addcategory = (category) => (dispatch, getState) => {
  axios
    .post('/api/categories/', category, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addcategory: 'category Added' }));
      dispatch({
        type: ADD_category,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// TODO ( to be added on the next task )
// EDIT category
// export const editcategory = (id) => (dispatch, getState) => {
//   axios
//     .post(`/api/categories/${id}/`, tokenConfig(getState))
//     .then((res) => {
//       dispatch(createMessage({ editcategory: 'category Updated' }));
//       dispatch({
//         type: EDIT_category,
//         payload: id,
//       });
//     })
//     .catch((err) => console.log(err));
// };
