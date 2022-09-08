import { EDIT_profile, GET_profiles, GET_userlists, GET_viewprofile } from '../actions/types.js';

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
    case GET_viewprofile:
      return {
        ...state,
        profiles: action.payload,
      };
    case EDIT_profile:
      return {
        ...state,
        profiles: state.profiles.map((content, id) =>
          content.id === action.payload.id
            ? {
                ...content,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                wordslearned: action.payload.wordslearned,
              }
            : content,
        ),
      };
    default:
      return state;
  }
}
