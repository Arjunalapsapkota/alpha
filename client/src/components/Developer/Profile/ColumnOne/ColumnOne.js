import React from "react";
import "./ColumnOne.css";
import ProfileHeader from "./ProfileHeader";
import Stats from "./Stats";
import Skills from "./Skills";
import Education from "./Education";
import Websites from "./Websites";

const ColumnOne = () => (
  <div className="col-8">
    <ProfileHeader />
    <Stats />
    <Skills />
    <Education />
    <Websites />
  </div>
);

export default ColumnOne;
