import {
  SEARCH_DISPLAY,
  HOME_DISPLAY,
  UPDATE_LOGIN,
  JOBS_DISPLAY,
  COMPANY_DISPLAY,
} from "../actions/types";

const initialState = {
  home: true,
  search: false,
  login: false,
  job: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case SEARCH_DISPLAY:
      return {
        ...state,
        home: false,
        search: true,
        job: false,
        company: false,
      };
    case HOME_DISPLAY:
      return {
        ...state,
        home: true,
        search: false,
        job: false,
        company: false,
      };
    case UPDATE_LOGIN:
      return { ...state, login: action.payload };
    case JOBS_DISPLAY:
      return {
        ...state,
        home: false,
        search: false,
        job: true,
        company: false,
      };
    case COMPANY_DISPLAY:
      return {
        ...state,
        home: false,
        search: false,
        job: false,
        company: true,
      };
  }
}
