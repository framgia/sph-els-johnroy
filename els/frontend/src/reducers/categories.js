import { GET_categories, DELETE_category, ADD_category, EDIT_category, CLEAR_categories } from '../actions/types.js';

const initialState = {
  categories: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_categories:
      return {
        ...state,
        categories: action.payload,
      };
    case DELETE_category:
      return {
        ...state,
        categories: state.categories.filter((category) => category.id !== action.payload),
      };
    case ADD_category:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case EDIT_category:
      return {
        ...state,
        categories: state.categories.filter((category) => category.id !== action.payload),
      };  
    case CLEAR_categories:
      return {
        ...state,
        categories: [],
      };
    default:
      return state;
  }
}
