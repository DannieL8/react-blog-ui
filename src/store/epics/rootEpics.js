import { combineEpics } from "redux-observable";
import {
  loadPostsEpic,
  searchPostsEpic,
  loadOnePost,
  loadPostsPageEpic,
  createOrUpdatePost,
} from "./postsEpics";
import {
  loadAuthorsEpic,
  loadAuthorPostsEpic,
  loadOneAuthorEpic,
} from "./authorsEpics";
import { loginEpic } from "./authEpics";

import { loadingEpic } from "./uiEpics";

const rootEpic = combineEpics(
  loadPostsEpic,
  searchPostsEpic,
  loadAuthorsEpic,
  loadPostsPageEpic,
  loadOnePost,
  loadAuthorPostsEpic,
  loadOneAuthorEpic,
  createOrUpdatePost,
  loadingEpic,
  loginEpic
);

export default rootEpic;
