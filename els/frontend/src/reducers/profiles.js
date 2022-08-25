import { GET_profiles, DELETE_profile } from '../actions/types.js';

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
    case DELETE_profile:
      return {
        ...state,
        profiles: state.profiles.filter((profile) => profile.id !== action.payload),
      };
    default:
      return state;
  }
}
