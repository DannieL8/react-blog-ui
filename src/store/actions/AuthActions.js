import * as types from "../types";

export const loginUser = () => {
  return { type: types.LOGIN };
};

export const userLoggedInSuccess = (payload) => {
  return { type: types.LOGGED_IN_SUCCESS, payload };
};
