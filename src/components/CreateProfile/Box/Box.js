import React, { Component } from "react";

const Box = ({ children }) => {
  return (
    <div className="Box">
      <div className="Inside">{children}</div>
    </div>
  );
};
export default Box;
