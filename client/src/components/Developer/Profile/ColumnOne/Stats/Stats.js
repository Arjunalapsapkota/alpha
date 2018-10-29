import React from "react";
import "./Stats.css";

const Stats = () => (
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">DevStart Stats</h2>
      {/* Below are hard coded. Replace with props with linked with BE */}
      <div class="container">
        <div class="row">
          <div class="rating">
            <input type="radio" id="star10" name="rating" value="10" />
            <label for="star10" title="Rocks!">
              5 stars
            </label>
            <input type="radio" id="star9" name="rating" value="9" />
            <label for="star9" title="Rocks!">
              4 stars
            </label>
            <input type="radio" id="star8" name="rating" value="8" />
            <label for="star8" title="Pretty good">
              3 stars
            </label>
            <input type="radio" id="star7" name="rating" value="7" />
            <label for="star7" title="Pretty good">
              2 stars
            </label>
            <input type="radio" id="star6" name="rating" value="6" />
            <label for="star6" title="Meh">
              1 star
            </label>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p className="card-subtitle mb-2">
            Proposals Submitted: <span>3</span>
          </p>
        </li>
        <li className="list-group-item">
          <p className="card-subtitle mb-2">
            Proposals Awarded: <span>3</span>
          </p>
        </li>
        <li className="list-group-item">
          <p className="card-subtitle mb-2">
            Work Completed: <span>1</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
);

export default Stats;
