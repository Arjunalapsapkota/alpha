import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

import Login from "./components/Login";
import Register from "./components/Register";
import Signup from "./components/SignUp";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>,
  document.getElementById("root")
);
