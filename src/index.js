import React from "react";
import ReactDOM from "react-dom";
import "./Scss/index.scss";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
