import axios from "axios";

import { GET_SINGLE_COMPANY } from "./types";

export const getSingleCompany = id => dispatch => {
  let url = "127.0.0.1/api/company/" + id.toString();
  axios
    .get(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(res => {
      dispatch({ type: GET_SINGLE_COMPANY, payload: res.data }); // JOB + COMPANY INFO
    })
    .catch(err => console.log(err));
};
