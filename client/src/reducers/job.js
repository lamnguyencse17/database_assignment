import { GET_SINGLE_JOB } from "../actions/types";

const initialState = {
  job: {
    id: 0,
    name: "",
    description: "",
    salary: 0,
    company: {},
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case GET_SINGLE_JOB:
      return action.payload;
  }
}
