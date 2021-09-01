import { GET_POSTS, ADD_POST, DELETE_POST } from "../actions/types";
const initialState = {
  posts: [{ id: "1", name: "Hello" }],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
