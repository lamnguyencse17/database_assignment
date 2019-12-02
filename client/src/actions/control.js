import {SEARCH_DISPLAY, HOME_DISPLAY} from "./types";

export const displaySearch = () => dispatch => {
        dispatch({type: SEARCH_DISPLAY});
}

export const displayHome = () => dispatch => {
    dispatch({type: HOME_DISPLAY});
}