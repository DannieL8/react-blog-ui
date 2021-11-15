import * as types from "../types";
import { baseUrl } from "../../constants/api";
import { setLoading, endLoading } from "../actions/UiActions";
import { map, of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";

import { ofType } from "redux-observable";

export const loadingEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(types.LOADING),
    mergeMap((action) => console.log("LOADING"))
  );
