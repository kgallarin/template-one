import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "reducers";

let composeEnhancers = compose;
let middlewares = [thunk, reduxPromise];

if (process.env.NODE_ENV !== "production") {
  middlewares = [thunk, reduxPromise, logger];
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default ({ children, initState = {} }) => {
  let store = createStore(
    rootReducer,
    initState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return <Provider store={store}>{children}</Provider>;
};
