import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { createStore } from "./store.js";

ReactDOM.render(
  <Provider store={createStore()}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
