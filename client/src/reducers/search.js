import { MAIN_SEARCH } from "../actions/types";

const initialState = {
  results: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case MAIN_SEARCH:
      return { results: action.payload };
  }
}
