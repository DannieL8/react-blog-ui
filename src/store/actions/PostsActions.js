import * as types from "../types";

export const getAllPostsSuccess = (posts) => {
  return { type: types.GET_ALL_POSTS_SUCCESS, posts };
};

export const loadPosts = () => {
  return { type: types.GET_ALL_POSTS };
};

export const closeToast = () => {
  return { type: types.NEW_POST_ADDED_CLOSE_TOAST };
};

export const loadPostsPageSuccess = (posts) => {
  return {
    type: types.GET_POSTS_PAGE_SUCCESS,
    payload: { posts: posts.content, totalPages: posts.totalPages },
  };
};

export const createPost = (post) => {
  return {
    type: types.CREATE_OR_UPDATE_POST,
    post,
  };
};

export const createPostSuccess = (post) => {
  return {
    type: types.CREATE_OR_UPDATE_POST_SUCCESS,
    post,
  };
};

export const loadOnePost = (id) => {
  return { type: types.GET_ONE_POST, id };
};

export const loadOnePostSuccess = (post) => {
  return { type: types.GET_ONE_POST_SUCCESS, post };
};

export const loadPostsPage = (options) => {
  return { type: types.GET_POSTS_PAGE, options };
};

export const searchPosts = (searchTerm) => {
  return { type: types.SEARCH_POSTS, payload: searchTerm };
};

export const searchPostsSuccess = (results) => {
  return { type: types.SEARCH_POSTS_SUCCESS, results };
};
