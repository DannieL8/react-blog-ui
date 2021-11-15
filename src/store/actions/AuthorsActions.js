import * as types from "../types";

export const loadAllAuthorsSuccess = (authors) => {
  return { type: types.GET_ALL_AUTHORS_SUCCESS, authors };
};

export const loadAllAuthors = () => {
  return { type: types.GET_ALL_AUTHORS };
};

export const loadAuthorPosts = (authorId) => {
  return { type: types.GET_AUTHOR_POSTS, authorId };
};

export const loadAuthorPostsSuccess = (authorPosts) => {
  return { type: types.GET_AUTHOR_POSTS_SUCCESS, authorPosts };
};

export const loadOneAuthor = (authorId) => {
  return { type: types.GET_ONE_AUTHOR, authorId };
};

export const loadOneAuthorSuccess = (author) => {
  return { type: types.GET_ONE_AUTHOR_SUCCESS, author };
};

export const cleanUpSingleAuthor = () => {
  return { type: types.CLEANUP_SINGLE_AUTHOR };
};
