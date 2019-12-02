import { REGISTER_PROCESS, LOGIN_PROCESS } from "../actions/types";

const initialState = {
  email: "",
  token: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case REGISTER_PROCESS:
      return { email: action.payload.email, token: action.payload.token };
    case LOGIN_PROCESS:
      return { email: action.payload.email, token: action.payload.token };
  }
}
