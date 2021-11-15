import { combineReducers } from "redux";
import postsPage from "./PostsReducer";
import searchedPosts from "./searchedPostsReducer";
import authorsState from "./AuthorsReducers";
import ui from "./UIReducers";
import auth from "./AuthReducers";

const rootReducers = combineReducers({
  postsPage,
  searchedPosts,
  authorsState,
  ui,
  auth,
});

export default rootReducers;
