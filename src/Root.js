import React from "react";
import PropTypes from "prop-types";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "reducers/";

let composeEnhancers = compose;
let middlewares = [thunk, reduxPromise];

if (process.env.NODE_ENV === "production") {
  middlewares = [thunk, reduxPromise, logger];
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// const Store = props => {
//   return createStore(
//     reducers,
//     props.initState,
//     composeEnhancers(applyMiddleware(...middlewares))
//   );
// };

// let store = Store();

export default ({ child, initState = {} }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initState,
        composeEnhancers(applyMiddleware(...middlewares))
      )}
    >
      {child}
    </Provider>
  );
};
