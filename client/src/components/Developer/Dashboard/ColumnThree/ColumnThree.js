import React from "react";
import Friends from "./Friends";
import Teams from "./Teams";
import "./ColumnThree.css";

const ColumnThree = () => (
  <div className="col-3">
      <Teams />
      <Friends />
    </div>
);

export default ColumnThree;