import React from "react";

const QuickStart = () => (
  <div className="nav">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">QuickStart</h2>
        {/* Below are hard coded. Replace with props with linked with BE */}

        <p className="card-text">
          <div>
            <ul className="nav-links">
              <a href="/">Dashboard</a>
              <br />
              <a href="/">Create Proposal</a>
              <br />
              <a href="/">Search Developers</a>
              <br />
              <a href="/">Search Teams</a>
            </ul>
          </div>
        </p>
      </div>
    </div>
  </div>
);

export default QuickStart;
