import { SEARCH_DISPLAY, HOME_DISPLAY } from "../actions/types";

const initialState = {
  home: true,
  search: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case SEARCH_DISPLAY:
      return { home: false, search: true };
    case HOME_DISPLAY:
      return { home: true, search: false };
  }
}
