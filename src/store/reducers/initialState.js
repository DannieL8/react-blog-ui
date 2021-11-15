export const postsInitialState = {
  posts: [],
  totalPages: 0,
  errorMessage: null,
  error: false,
  singlePost: null,
  newPostAdded: false,
  newPost: null,
  isSaving: false,
};

export const searchedPostsInitialState = {
  searchedPosts: [],
};

export const authorsInitialState = {
  authors: [],
  singleAuthor: null,
  authorPosts: [],
};

export const uiInitialState = {
  isLoading: false,
  showHeader: true,
};

export const apiCallInitialState = {
  apiCallsInProgress: 0,
  apiCallFailed: false,
  apiCallFailedMsg: "",
};

export const authInitialState = {
  user: {},
  token: "",
  isLoggedIn: false,
};
