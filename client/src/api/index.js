import axios from "./axios";

export const fetchPost = async (id) => {
  try {
    const { data } = await axios.get(`posts/${id}`);
    console.log("data is ", data);
    return data;
  } catch (error) {
    console.log("error is ", error.message);
  }
};

export const fetchPosts = async () => {
  try {
    const { data } = await axios.get("posts");
    console.log("data is ", data);
    return data;
  } catch (error) {
    console.log("error is ", error.message);
  }
};

export const createPost = async (postData) => {
  try {
    const { data } = await axios.post("posts", postData);
    console.log("data is ", data);
    return data;
  } catch (error) {
    console.log("error is ", error);
  }
};

export const updatePost = async (id,postData) => {
  try {
    const { data } = await axios.patch(`posts/${id}`, postData);
    console.log("data is ", data);
    return data;
  } catch (error) {
    console.log("error is ", error.message);
  }
};

export const deletePost = async (id) => {
  try {
    const { data } = await axios.delete(`posts/${id}`);
    console.log("data is ", data);
    return data;
  } catch (error) {
    console.log("error is ", error.message);
  }
};

export const likePost = async (id) => {
  try {
    const { data } = await axios.patch(`posts/${id}/like`, {});
    console.log("data is ", data);
    return data;
  } catch (error) {
    console.log("error is ", error.message);
  }
};