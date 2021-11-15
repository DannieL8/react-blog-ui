import { postsInitialState } from "./initialState";
import * as types from "../types";

export default function PostsReducer(state = postsInitialState, action) {
  switch (action.type) {
    case types.GET_ALL_POSTS_SUCCESS:
      return { ...state, posts: action.posts };

    case types.GET_POSTS_PAGE_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        totalPages: action.payload.totalPages,
      };

    case types.CREATE_OR_UPDATE_POST:
      return {
        ...state,
        isSaving: true,
      };

    case types.CREATE_OR_UPDATE_POST_SUCCESS:
      return {
        ...state,
        newPost: action.post,
        isSaving: false,
        newPostAdded: true,
      };
    case types.NEW_POST_ADDED_CLOSE_TOAST:
      return {
        ...state,
        newPostAdded: false,
      };

    case types.GET_ONE_POST_SUCCESS:
      return { ...state, singlePost: action.post };

    case types.FETCH_POSTS_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        error: action.error,
      };

    default:
      return state;
  }
}
