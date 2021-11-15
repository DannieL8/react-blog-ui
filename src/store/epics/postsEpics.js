import * as types from "../types";
import { baseUrl } from "../../constants/api";
import {
  getAllPostsSuccess,
  searchPostsSuccess,
  loadPostsPageSuccess,
  loadOnePostSuccess,
  createPostSuccess,
} from "../actions/PostsActions";

import { map, of } from "rxjs";
import { mergeMap, switchMap, mergeWith, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { setLoading, endLoading } from "../actions/UiActions";

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

///CREATE OR UPDATE POST

export const createOrUpdatePost = (action$) =>
  action$.pipe(
    ofType(types.CREATE_OR_UPDATE_POST),
    mergeMap(({ post }) =>
      ajax({
        url: `${baseUrl}${post.id ? "posts/update" : "posts/create"}`,
        method: post.id ? "PUT" : "POST",
        body: post,
        headers: {
          "Content-Type": "application/vnd.piomin.app-v1.2+json",
        },
      }).pipe(
        map(({ response }) => createPostSuccess(response)),
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

/// LOAD POSTS PAGES

export const loadPostsPageEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(types.GET_POSTS_PAGE),
    mergeMap((action) =>
      getJSON(
        `${baseUrl}posts/page?page=${action.options.page}&size=${action.options.size}`
      ).pipe(
        map((posts) => loadPostsPageSuccess(posts)),
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

/// GET ONE POST

export const loadOnePost = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(types.GET_ONE_POST),
    mergeMap((action) =>
      getJSON(`${baseUrl}posts/userandpost/${action.id}`).pipe(
        map((post) => loadOnePostSuccess(post)),
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

// SEARCH POSTS

export const searchPostsEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(types.SEARCH_POSTS),
    mergeMap((action) => {
      return getJSON(`${baseUrl}posts?title_like=${action.payload}`).pipe(
        map((posts) => searchPostsSuccess(posts)),
        catchError((error) =>
          of({
            type: types.FETCH_POSTS_REJECTED,
            payload: error.message,
            error: true,
          })
        )
      );
    })
  );
