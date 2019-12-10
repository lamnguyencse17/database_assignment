import axios from "axios";
import store from "../store";
import {
  REGISTER_PROCESS,
  LOGIN_PROCESS,
  TOKEN_CHECK,
  UPDATE_LOGIN,
  ADD_CV,
} from "./types";

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
      dispatch({ type: REGISTER_PROCESS, payload: res.data }); // payload: TOKEN + ID
      dispatch({ type: UPDATE_LOGIN, payload: true });
      resolve(true);
    })
    .catch(err => {
      console.log(err);
      reject(err);
    });
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
      dispatch({ type: LOGIN_PROCESS, payload: res.data }); // payload: TOKEN + ID
    })
    .catch(err => console.log(err));
};

export const checkToken = token => dispatch => {
  axios
    .post(
      "127.0.0.1:5000/api/auth",
      {
        token: token,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
    .then(res => {
      res.data = true;
      dispatch({ type: UPDATE_LOGIN, payload: true });
      dispatch({ type: TOKEN_CHECK, payload: true });
    })
    .catch(err => console.log(err));
};

export const updateAccount = (id, name, blog, password) => {
  url = "127.0.0.1/api/applicant/" + id.toString();
  axios
    .put(
      url,
      {
        name,
        blog,
        password,
      },
      { headers: { "Content-Type": "application/json", Authorization: token } }
    )
    .then(res => {
      dispatch({ type: UPDATE_ACCOUNT, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const addCv = (id, cv) => {
  url = "127.0.0.1/api/cv/";
  axios
    .post(
      url,
      {
        id: id, //Owner
        email: cv.email,
        phone: cv.phone,
        skill: cv.skill,
        job_target: cv.job_target,
        education: [], //ID goes here
        experience: [],
        document: [],
      },
      { headers: { "Content-Type": "application/json", Authorization: token } }
    )
    .then(res => {
      dispatch({ type: ADD_CV, payload: res.data }); //all cv of id owner
    }).catch(err => console.log(err))
};

export const deleteCv = id => {};
