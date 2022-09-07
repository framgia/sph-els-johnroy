import { GET_activitylogs, ADD_activitylog } from '../actions/types.js';

const initialState = {
  activitylogs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_activitylogs:
      return {
        ...state,
        activitylogs: action.payload,
      };
    case ADD_activitylog:
      return {
        ...state,
        activitylogs: [...state.activitylogs, action.payload],
      };
    default:
      return state;
  }
}
