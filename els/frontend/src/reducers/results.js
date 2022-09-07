import { GET_result, ADD_results } from '../actions/types.js';

const initialState = {
  results: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_result:
      return {
        ...state,
        results: action.payload,
      };
    case ADD_results:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    default:
      return state;
  }
}
