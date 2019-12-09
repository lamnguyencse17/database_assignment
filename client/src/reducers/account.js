import { REGISTER_PROCESS, LOGIN_PROCESS, TOKEN_CHECK, UPDATE_ACCOUNT } from "../actions/types";

const initialState = {
  email: "something@gmail.com",
  name: "Someting Wong",
  id: 3,
  token: localStorage.getItem('token'),
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case REGISTER_PROCESS:
      localStorage.setItem('token', action.payload.token)
      return { ...state, email: action.payload.email, id: action.payload.id};
    case LOGIN_PROCESS:
      localStorage.setItem('token', action.payload.token)
      return { ...state, email: action.payload.email, id: action.payload.id, name: action.payload.name};
    case TOKEN_CHECK:
      if (!action.payload){
        localStorage.removeItem('token');
      }
      return {...state, token: ""};
      case UPDATE_ACCOUNT:
        newstate = {}
        if (payload.email != ""){
          newstate.email = payload.email
        }
        if (payload.name != ""){
          newstate.name = payload.name
        }
      return newstate
  }
}
