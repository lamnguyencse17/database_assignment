import axios from "axios";

import { REGISTER_PROCESS, LOGIN_PROCESS } from "./types";

export const registerProcess = (email, password) => dispatch => {
  axios
    .post(
      "127.0.0.1:5000/api/auth/register",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(res => {
      dispatch({ type: REGISTER_PROCESS, payload: res.data }); // payload: TOKEN
    })
    .catch(err => console.log(err));
};

export const loginProcess = (email, password) => dispatch => {
  axios
    .post(
      "127.0.0.1:5000/api/auth/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(res => {
      dispatch({ type: LOGIN_PROCESS, payload: res.data }); // payload: TOKEN
    })
    .catch(err => console.log(err));
};
