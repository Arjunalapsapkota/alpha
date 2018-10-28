import React from "react";
import "./FriendList.css";

const FriendList = props => (
<div className="friends-list">
      <img
        className=""
        alt={props.name}
        src={props.image}
        height="50"
        width="50"
      />
    
      <p>
        <strong /> {props.name}
      </p>
  </div>
);

export default FriendList;
