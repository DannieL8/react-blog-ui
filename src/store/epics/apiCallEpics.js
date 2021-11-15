import * as types from "../types";
import { baseUrl } from "../../constants/api";
import { getAllPostsSuccess } from "../actions/PostsActions";
import { map, of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";

// GET ALL POSTS

///// Be sure to add epic in root Epics

export const loadPostsEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(types.GET_ALL_POSTS),
    mergeMap((action) =>
      getJSON(`${baseUrl}posts`).pipe(
        map((posts) => getAllPostsSuccess(posts)),
        catchError((error) =>
          of({
            type: types.FETCH_POSTS_REJECTED,
            payload: error.message,
            error: true,
          })
        )
      )
    )
  );
