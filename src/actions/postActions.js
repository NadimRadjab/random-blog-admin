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
import { tokenConfig } from "../actions/authActions";
import { retrunErrors } from "../actions/errorActions";

export const getPosts = () => (dispatch) => {
  dispatch(setPostsLoading());
  axios
    .get("https://powerful-castle-69788.herokuapp.com/api/posts")
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(retrunErrors(err.response.data, err.response.status));
    });
};
export const getPost = (id) => (dispatch) => {
  dispatch(setPostsLoading());
  axios
    .get(`https://powerful-castle-69788.herokuapp.com/api/posts/${id}`)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(retrunErrors(err.response.data, err.response.status));
    });
};
export const addPost = (post) => (dispatch, getState) => {
  axios
    .post(
      "https://powerful-castle-69788.herokuapp.com/api/posts",
      post,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(retrunErrors(err.response.data, err.response.status));
    });
};

export const deletePost = (id) => (dispatch, getState) => {
  axios
    .delete(
      `https://powerful-castle-69788.herokuapp.com/api/posts/${id}`,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    )
    .catch((err) => {
      dispatch(retrunErrors(err.response.data, err.response.status));
    });
};

export const updatePost = (id, name, text) => (dispatch, getState) => {
  axios
    .post(
      `https://powerful-castle-69788.herokuapp.com/api/posts/${id}`,
      { name, text },
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: UPDATE_POST,
        payload: { id, name, text },
      })
    )
    .catch((err) => {
      dispatch(retrunErrors(err.response.data, err.response.status));
    });
};
export const deleteComment = (id, commentId) => (dispatch, getState) => {
  axios
    .delete(
      `https://powerful-castle-69788.herokuapp.com/api/posts/${id}/comments/${commentId}`,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: DELETE_COMMENT,
        payload: commentId,
      })
    )
    .catch((err) => {
      dispatch(retrunErrors(err.response.data, err.response.status));
    });
};
export const setPostsLoading = () => {
  return {
    type: POSTS_LOADING,
  };
};
