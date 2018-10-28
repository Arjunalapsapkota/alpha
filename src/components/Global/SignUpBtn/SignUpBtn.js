import React from "react";
import { Link } from "react-router-dom";

const SignUpBtn = () => (
  // Go to the Sign Up page
  <Link
    to="/signup"
    type="button"
    className="btn btn-ds-outline-primary btn-lg"
  >
    Sign Up
  </Link>
);

export default SignUpBtn;
