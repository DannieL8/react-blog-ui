import * as types from "../types";

export const setLoading = () => {
  return { type: types.LOADING };
};

export const endLoading = () => {
  return { type: types.STOP_LOADING };
};

export const hideHeader = () => {
  return { type: types.HIDE_HEADER };
};

export const showHeader = () => {
  return { type: types.SHOW_HEADER };
};
