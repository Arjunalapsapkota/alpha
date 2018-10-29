import React from "react";

const Websites = () => (
  <div className="card">
    <div className="card-body">
      <h2 className="card-title">Websites</h2>
      {/* Below are hard coded. Replace with props with linked with BE */}
      <p className="card-text">
        GitHub URL:{" "}
        <a href="https://github.com/artawood" target="blank" class="card-link">
          https://github.com/artawood
        </a>
      </p>
      <p className="card-text">
        LinkedIn URL:{" "}
        <a
          href="https://linkedIn.com/in/artawood"
          target="blank"
          class="card-link"
        >
          https://linkedIn.com/in/artawood
        </a>
      </p>
      <p className="card-text">
        Portfolio URL:{" "}
        <a href="http://www.artawood.net" target="blank" class="card-link">
          http://www.artawood.net
        </a>
      </p>
    </div>
  </div>
);

export default Websites;
