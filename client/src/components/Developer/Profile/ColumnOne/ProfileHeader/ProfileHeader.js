import React from "react";
import "./ProfileHeader.css";
import Avatar from "./Avatar";

const ProfileHeader = () => (
  <div className="card">
    <div className="card-body">
      <div className="row">
        <div className="col-4">
          <Avatar />
        </div>
        <div className="col-8">
          <div className="profile-header">
            <h2 className="user-name">FirstName LastName</h2>
            <h3 className="user-title text-muted">Full Stack Developer</h3>
          </div>
          {/* Below is hard coded and will be replaced with user's data when connect to BE */}
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
