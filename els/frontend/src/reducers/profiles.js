import { GET_profiles, GET_userlists } from '../actions/types.js';

const initialState = {
  profiles: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_profiles:
      return {
        ...state,
        profiles: action.payload,
      };
    case GET_userlists:
      return {
        ...state,
        profiles: action.payload,
      };
    default:
      return state;
  }
}
