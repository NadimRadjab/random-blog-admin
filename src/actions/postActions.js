import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  POSTS_LOADING,
  DELETE_COMMENT,
} from "./types";
import axios from "axios";

export const getPosts = () => (dispatch) => {
  dispatch(setPostsLoading());
  axios.get("http://localhost:5000/api/posts").then((res) =>
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    })
  );
};
export const getPost = (id) => (dispatch) => {
  dispatch(setPostsLoading());
  axios.get(`http://localhost:5000/api/posts/${id}`).then((res) =>
    dispatch({
      type: GET_POST,
      payload: res.data,
    })
  );
};
export const addPost = (post) => (dispatch) => {
  axios.post("http://localhost:5000/api/posts", post).then((res) =>
    dispatch({
      type: ADD_POST,
      payload: res.data,
    })
  );
};

export const deletePost = (id) => (dispatch) => {
  axios.delete(`http://localhost:5000/api/posts/${id}`).then((res) =>
    dispatch({
      type: DELETE_POST,
      payload: id,
    })
  );
};

export const updatePost = (id, name, text) => (dispatch) => {
  console.log(id);
  axios
    .post(`http://localhost:5000/api/posts/${id}`, { name, text })
    .then((res) =>
      dispatch({
        type: UPDATE_POST,
        payload: { id, name, text },
      })
    );
};
export const deleteComment = (id, commentId) => (dispatch) => {
  console.log(commentId);
  axios
    .delete(`http://localhost:5000/api/posts/${id}/comments/${commentId}`)
    .then((res) =>
      dispatch({
        type: DELETE_COMMENT,
        payload: commentId,
      })
    );
};
export const setPostsLoading = () => {
  return {
    type: POSTS_LOADING,
  };
};
