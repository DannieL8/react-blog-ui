import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducers";
import { createEpicMiddleware } from "redux-observable";
import { ajax } from "rxjs/ajax";

import rootEpic from "./epics/rootEpics";

const epicMiddleware = createEpicMiddleware({
  dependencies: { getJSON: ajax.getJSON, postJSON: ajax.post },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

export const configStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};
