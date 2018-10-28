import React from "react";

import "./ColumnThree.css";

const ColumnThree = () => (
  <div className="col-3">
    <div className="card">
      <div className="card-body">
        {/* Render records to the span below */}
        <p className="card-text">
          Proposals Posted: <span>3</span>
        </p>
        <p className="card-text">
          Proposals Awarded: <span>1</span>
        </p>
        <p className="card-text">
          Total Award Amount: $<span>1000</span>
        </p>
      </div>
    </div>
  </div>
);

export default ColumnThree;
