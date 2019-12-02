import axios from "axios";

import {MAIN_SEARCH} from "./types";

export const searchProcess = (term) => dispatch => {
    axios.post("127.0.0.1/api/search",
    {
        term: term
    },{
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        dispatch({type: MAIN_SEARCH, payload: res.data}); // SEACH RESULTS
    }).catch(err => console.log(err));
}