import { ADD_LINK, REMOVE_LINK } from './actions';

const initialState = {
  links: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        links: [...state.links, action.payload],
      };
    case REMOVE_LINK:
      return {
        ...state,
        links: state.links.filter((link) => link.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;