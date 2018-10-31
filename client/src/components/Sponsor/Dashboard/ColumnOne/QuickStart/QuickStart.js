import React from "react";

const QuickStart = () => (
  <div className="nav">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">QuickStart</h2>
        {/* Below are hard coded. Replace with props with linked with BE */}

        <div className="card-text">
          <div>
            <div className="nav-links">
              <a href="/#">Home</a>
              <br />
              <a href="/">Create Proposal</a>
              <br />
              <a href="/">Search Devs</a>
              <br />
              <a href="/">Search Teams</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuickStart;
