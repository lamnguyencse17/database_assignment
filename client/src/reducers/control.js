import {
  SEARCH_DISPLAY,
  HOME_DISPLAY,
  UPDATE_LOGIN,
  JOBS_DISPLAY,
  COMPANY_DISPLAY,
  GET_JOBS
} from "../actions/types";

const initialState = {
  home: true,
  search: false,
  login: true,
  job: false,
  company: true,
  jobs: [{'id': 1, 'name': 'job1', 'description': 'description1', 'salary': 1},
  {'id': 2, 'name': 'job2', 'description': 'description2', 'salary': 2},
  {'id': 3, 'name': 'job3', 'description': 'description3', 'salary': 3},
  {'id': 4, 'name': 'job4', 'description': 'description4', 'salary': 4},
  {'id': 5, 'name': 'job5', 'description': 'description5', 'salary': 5},
  {'id': 6, 'name': 'job6', 'description': 'description6', 'salary': 6},
  {'id': 7, 'name': 'job7', 'description': 'description7', 'salary': 7},
  {'id': 8, 'name': 'job8', 'description': 'description8', 'salary': 8},
  {'id': 9, 'name': 'job9', 'description': 'description9', 'salary': 9}]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case SEARCH_DISPLAY:
      return {
        ...state,
        home: false,
        search: true,
        job: false,
        company: false,
      };
    case HOME_DISPLAY:
      return {
        ...state,
        home: true,
        search: false,
        job: false,
        company: false,
      };
    case UPDATE_LOGIN:
      return { ...state, login: action.payload };
    case JOBS_DISPLAY:
      return {
        ...state,
        home: false,
        search: false,
        job: true,
        company: false,
      };
    case COMPANY_DISPLAY:
      return {
        ...state,
        home: false,
        search: false,
        job: false,
        company: true,
      };
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload
      }
  }
}
