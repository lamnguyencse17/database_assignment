import {
  SEARCH_DISPLAY,
  HOME_DISPLAY,
  JOBS_DISPLAY,
  UPDATE_LOGIN,
  COMPANY_DISPLAY,
} from "./types";

export const displaySearch = () => dispatch => {
  dispatch({ type: SEARCH_DISPLAY });
};

export const displayHome = () => dispatch => {
  dispatch({ type: HOME_DISPLAY });
};

export const updateLogin = update => dispatch => {
  dispatch({ type: UPDATE_LOGIN, payload: update });
};

export const displayCompany = () => dispatch => {
  dispatch({ type: COMPANY_DISPLAY });
};

export const displayJobs = () => dispatch => {
  dispatch({ type: JOBS_DISPLAY });
};
