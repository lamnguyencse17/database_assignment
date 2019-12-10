import { GET_SINGLE_COMPANY } from "../actions/types";

const initialState = {
  company: {
    id: 0,
    name: "",
    website: "",
    address: "",
    phone: "",
    jobs: [],
    reviews: []
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case GET_SINGLE_COMPANY:
      return action.payload;
  }
}
