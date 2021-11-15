import * as types from "../types";
import { authInitialState } from "./initialState";

export default function AuthReducers(state = authInitialState, action) {
  switch (action.type) {
    case types.LOGGED_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: !!action.payload.token,
      };

    default:
      return state;
  }
}
