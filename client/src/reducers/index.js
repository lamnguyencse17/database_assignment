import { combineReducers } from "redux";
import account from "./account";
import search from "./search";
import control from "./control";

export default combineReducers({ account, search, control });
