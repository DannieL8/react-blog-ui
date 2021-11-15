import * as types from "../types";
import { authorsInitialState } from "./initialState";

export default function AuthorsReducers(state = authorsInitialState, action) {
  switch (action.type) {
    case types.GET_ALL_AUTHORS_SUCCESS:
      return { ...state, authors: action.authors };
    case types.GET_AUTHOR_POSTS_SUCCESS:
      return { ...state, authorPosts: action.authorPosts };
    case types.GET_ONE_AUTHOR_SUCCESS:
      return { ...state, singleAuthor: action.author };
    case types.CLEANUP_SINGLE_AUTHOR:
      return { ...state, singleAuthor: null };
    default:
      return state;
  }
}
