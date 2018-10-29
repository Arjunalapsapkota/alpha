import React from "react";
import "./ProfileHeader.css";
import Avatar from "./Avatar";

const ProfileHeader = () => (
  <div className="card">
    <div className="container mt-1 mb-2">
      <div className="row">
        <div className="col-4">
          <Avatar />
        </div>
        <div className="col-8">
          <p className="user-name">FirstName</p>
          {/* Below is hard coded and will be replaced with user's data when connect to BE */}
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
