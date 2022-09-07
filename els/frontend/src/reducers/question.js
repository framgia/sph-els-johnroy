import { ADD_question, EDIT_question, GET_questions } from '../actions/types.js';

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
    case GET_questions:
      return {
        ...state,
        questions: action.payload,
      };
    case EDIT_question:
      return {
        ...state,
        questions: state.questions.map((content, id) =>
          content.id === action.payload.id
            ? { ...content, name: action.payload.name, message: action.payload.message }
            : content,
        ),
      };
    default:
      return state;
  }
}
