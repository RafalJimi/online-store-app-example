import React from "react";
import ReactDOM, { Renderer } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { App } from "./App";

ReactDOM.render<Renderer>(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
