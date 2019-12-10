import {
  ADD_CV,
  REGISTER_PROCESS,
  LOGIN_PROCESS,
  TOKEN_CHECK,
  UPDATE_ACCOUNT,
} from "../actions/types";

const initialState = {
  email: "something@gmail.com",
  name: "Someting Wong",
  id: 3,
  token: localStorage.getItem("token"),
  cv: [
    {
      email: "sometingwong@gmail.com",
      phone: "091999999",
      skill: "trash talk",
      job_target: "money",
      document: "someting",
      experience: "wong",
    },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case REGISTER_PROCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        email: action.payload.email,
        id: action.payload.id,
        cv: [],
      };
    case LOGIN_PROCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        email: action.payload.email,
        id: action.payload.id,
        name: action.payload.name,
        cv: action.payload.cv,
      };
    case TOKEN_CHECK:
      if (!action.payload) {
        localStorage.removeItem("token");
      }
      return { ...state, token: "" };
    case UPDATE_ACCOUNT:
      newstate = {};
      if (payload.email != "") {
        newstate.email = payload.email;
      }
      if (payload.name != "") {
        newstate.name = payload.name;
      }
      return newstate;
    case ADD_CV:
      return { ...state, cv: action.payload };
  }
}
