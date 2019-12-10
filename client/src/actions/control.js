import {
  SEARCH_DISPLAY,
  HOME_DISPLAY,
  JOBS_DISPLAY,
  UPDATE_LOGIN,
  COMPANY_DISPLAY,
  GET_JOBS,
} from "./types";

import axios from "axios";

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

export const getJobs = (amount) => dispatch => {
  axios.get("127.0.0.1/api/job", {
    'amount': amount
  },{
    headers:{
      "Content-Type": "application/json",
    }
  }).then(res => {
    dispatch({ type: GET_JOBS, payload: res.data });
  }).catch(err => console.log(err))
}
