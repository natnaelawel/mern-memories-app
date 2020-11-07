import * as api from "../../api";
import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  LIKE_POST,
  UPDATE_POST,
} from "../constants/actionsType";

export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    const action = { type: FETCH_POSTS, payload: data };
    return dispatch(action);
  } catch (error) {
    console.log("error is occured", error.message);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const data = await api.createPost(postData);
    const action = { type: CREATE_POST, payload: data };
    return dispatch(action);
  } catch (error) {
    console.log("error is occured", error.message);
  }
};

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const data = await api.updatePost(id, postData);
    const action = { type: UPDATE_POST, payload: data };
    return dispatch(action);
  } catch (error) {
    console.log("error is occured", error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    const action = { type: DELETE_POST, payload: { _id: id } };
    return dispatch(action);
  } catch (error) {
    console.log("error is occured", error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const data = await api.likePost(id);
    const action = { type: LIKE_POST, payload: data };
    return dispatch(action);
  } catch (error) {
    console.log("error is occured", error.message);
  }
};
