import { ADD_question } from '../actions/types.js';

const initialState = {
  questions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_question:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    default:
      return state;
  }
}
