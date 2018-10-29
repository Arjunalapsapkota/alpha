import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="main-head jumbotron bg-ds-white">
    <div className="main-content container text-center">
      <div className="text-wrapper">
        <h1>DevStart</h1>
        <h2>Start a project, Start a career, Start today</h2>
      </div>
      <p>
        <a className="btn btn-ds-primary btn-lg" href="" role="button">
          I'm a sponsor
        </a>
        <a className="btn btn-ds-primary btn-lg" href="" role="button">
          I'm a developer
        </a>
      </p>
    </div>
  </div>
);

export default Jumbotron;
