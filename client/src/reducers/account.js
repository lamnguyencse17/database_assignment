import { REGISTER_PROCESS, LOGIN_PROCESS, TOKEN_CHECK } from "../actions/types";

const initialState = {
  email: "",
  token: localStorage.getItem('token'),
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case REGISTER_PROCESS:
      localStorage.setItem('token', action.payload.token)
      return { ...state, email: action.payload.email};
    case LOGIN_PROCESS:
      localStorage.setItem('token', action.payload.token)
      return { email: action.payload.email};
    case TOKEN_CHECK:
      if (!action.payload){
        localStorage.removeItem('token');
      }
      return state;
  }
}
