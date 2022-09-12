import { GET_userfollows, DELETE_follows, ADD_follow } from '../actions/types.js';

const initialState = {
  follows: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_userfollows:
      return {
        ...state,
        follows: action.payload,
      };
    case DELETE_follows:
      return {
        ...state,
        follows: state.follows.filter((follow) => follow.id !== action.payload),
      };
    case ADD_follow:
      return {
        ...state,
        follows: [...state.follows, action.payload],
      };
    default:
      return state;
  }
}
