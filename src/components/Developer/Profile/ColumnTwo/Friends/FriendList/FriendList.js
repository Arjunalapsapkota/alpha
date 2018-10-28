import React from "react";
import "./FriendList.css";

const FriendList = props => (
  <div className="row">
    <div className="col-4">
      <img
        className="rounded-circle"
        alt={props.firstName}
        src={props.profileImg}
        height="50"
        width="50"
      />
    </div>
    <div className="col-8">
      <p>
        <strong /> {props.firstName}
      </p>
    </div>
  </div>
);

export default FriendList;
