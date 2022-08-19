import { ADD_question } from '../actions/types.js';

const initialState = {
  question: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_question:
      return {
        ...state,
        question: [...state.question, action.payload],
      };
    default:
      return state;
  }
}
