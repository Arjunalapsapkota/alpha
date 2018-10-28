import React, { Component } from "react";
const Col = ({ children }) => {
  return (
    <div className="col col-md-6 col-sm-6 col-lg-6 column">{children} </div>
  );
};
export default Col;
