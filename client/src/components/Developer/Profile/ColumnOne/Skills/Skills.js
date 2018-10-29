import React from "react";
import "./Skills.css";

const Skills = () => (
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Skills</h2>
      {/* Below are hard coded. Replace with props with linked with BE */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h3 className="card-subtitle mb-2">Javascript</h3>
          <p className="card-text text-muted">Endorsements</p>
        </li>
        <li className="list-group-item">
          <h3 className="card-subtitle mb-2">Bootstrap</h3>
          <p className="card-text text-muted">Endorsements</p>
        </li>
        <li className="list-group-item">
          <h3 className="card-subtitle mb-2">HTML</h3>
          <p className="card-text text-muted">Endorsements</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
