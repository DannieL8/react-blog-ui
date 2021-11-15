import { searchedPostsInitialState } from "./initialState";
import * as types from "../types";

export default function PostsReducer(
  state = searchedPostsInitialState.searchedPosts,
  action
) {
  switch (action.type) {
    case types.SEARCH_POSTS_SUCCESS:
      return action.results;
    default:
      return state;
  }
}
