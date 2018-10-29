import React from "react";
import { Link } from "react-router-dom";
import "./SignUpBtn.css";

const SignUpBtn = () => (
  // Go to the Sign Up page
  <Link
    to="/signup"
    // type="button"
    className="btn btn-ds-outline-primary btn-lg sign-up-btn"
  >
    Sign Up
  </Link>
);

export default SignUpBtn;
