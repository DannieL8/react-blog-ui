import * as types from "../types";
import { uiInitialState } from "./initialState";

export default function UIReducers(state = uiInitialState, action) {
  switch (action.type) {
    case types.HIDE_HEADER:
      return { ...state, showHeader: false };

    case types.SHOW_HEADER:
      return { ...state, showHeader: true };

    default:
      return state;
  }
}
