import React, { Component } from "react";
import "./LogInBtn.css";
import { Link } from "react-router-dom";

class LogInBtn extends Component {
  // create a function to log user into the site here

  render() {
    return (
      <Link
        to="/login"
        // type="button"
        className="btn btn-ds-outline-primary btn-lg log-in-btn"
      >
        Log In
      </Link>
    );
  }
}

export default LogInBtn;
