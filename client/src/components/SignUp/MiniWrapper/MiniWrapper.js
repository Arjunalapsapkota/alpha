import React, { Component } from "react";
import "../SignUp.css";
import ReactDOM from "react-dom";
import Form from "../Form";
const MiniWrapper = ({ children }) => {
  return <div className="WrapperMini">{children}</div>;
};

export default MiniWrapper;
