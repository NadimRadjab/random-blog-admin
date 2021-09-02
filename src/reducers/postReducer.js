import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  POSTS_LOADING,
  DELETE_COMMENT,
} from "../actions/types";
const initialState = {
  posts: [],
  post: [],
  comments: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        comments: action.payload.comments,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.id
            ? { ...post, name: action.payload.name, text: action.payload.text }
            : post
        ),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment._id !== action.payload
        ),
      };
    case POSTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
