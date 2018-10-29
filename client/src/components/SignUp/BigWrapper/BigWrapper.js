import React, { Component } from "react";
import "../SignUp.css";
import MiniWrapper from "../MiniWrapper";

import ReactDOM from "react-dom";
const BigWrapper = ({ children }) => {
  return <div className="WrapperBig">{children}</div>;
};

export default BigWrapper;
