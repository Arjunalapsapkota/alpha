import React from "react";
import Header from "../../Global/Header";
import ColumnOne from "./ColumnOne";
import ColumnTwo from "./ColumnTwo";

const CreateNewProposal = () => (
  <div>
    <Header />
    <div className="container ds-container">
      <div className="row">
        <ColumnOne />
        <ColumnTwo />
      </div>
    </div>
  </div>
);

export default CreateNewProposal;
