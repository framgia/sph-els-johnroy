import { GET_results, ADD_result } from '../actions/types.js';

const initialState = {
  results: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_results:
      return {
        ...state,
        results: action.payload,
      };
    case ADD_result:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    default:
      return state;
  }
}
