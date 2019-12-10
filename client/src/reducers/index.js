import { combineReducers } from "redux";
import account from "./account";
import search from "./search";
import control from "./control";
import job from "./job";
import company from "./company";

export default combineReducers({ account, search, control, job, company });
