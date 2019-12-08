import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxPromise from "redux-promise";  // 리덕스-미들웨어

import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>,
    document.querySelector(".container"));
