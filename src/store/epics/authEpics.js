import { ofType } from "redux-observable";
import { mergeMap, map } from "rxjs";
import * as types from "../types";
import { userLoggedInSuccess } from "../actions/AuthActions";

export const loginEpic = (action$, state$) =>
  action$.pipe(
    ofType(types.LOGIN),
    mergeMap(() =>
      userLoggedInSuccess({
        user: "TATSAA",
        token: "d1212d1231 das 1 12d asd 12 ddasd ",
      })
    )
  );
