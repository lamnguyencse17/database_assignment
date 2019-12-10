import axios from "axios";

import { GET_SINGLE_JOB } from "./types";

export const getSingleJob = id => dispatch => {
  let url = "127.0.0.1/api/job/" + id.toString();
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
      dispatch({ type: GET_SINGLE_JOB, payload: res.data }); // JOB + COMPANY INFO
    })
    .catch(err => console.log(err));
};
