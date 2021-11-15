import * as types from "../types";
import { ofType } from "redux-observable";
import { mergeMap, catchError } from "rxjs/operators";
import { map, of } from "rxjs";
import { baseUrl } from "../../constants/api";
import {
  loadAllAuthorsSuccess,
  loadAuthorPostsSuccess,
  loadOneAuthorSuccess,
} from "../actions/AuthorsActions";

export const loadAuthorsEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(types.GET_ALL_AUTHORS),
    mergeMap((action) =>
      getJSON(`${baseUrl}users`).pipe(
        map((authors) => loadAllAuthorsSuccess(authors)),
        catchError((error) =>
          of({
            type: types.FETCH_AUTHORS_REJECTED,
            payload: error.message,
            error: true,
          })
        )
      )
    )
  );

export const loadAuthorPostsEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(types.GET_AUTHOR_POSTS),
    mergeMap((action) =>
      getJSON(`${baseUrl}posts/userposts/${action.authorId}`).pipe(
        map((posts) => loadAuthorPostsSuccess(posts)),
        catchError((error) =>
          of({
            type: types.FETCH_AUTHORS_REJECTED,
            payload: error.message,
            error: true,
          })
        )
      )
    )
  );

export const loadOneAuthorEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(types.GET_ONE_AUTHOR),
    mergeMap((action) =>
      getJSON(`${baseUrl}users/${action.authorId}`).pipe(
        map((author) => loadOneAuthorSuccess(author)),
        catchError((error) =>
          of({
            type: types.FETCH_AUTHORS_REJECTED,
            payload: error.message,
            error: true,
          })
        )
      )
    )
  );
