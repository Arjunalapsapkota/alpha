import React from "react";
import "./TeamsList.css";

const TeamsList = props => (
<div className="teams-list">
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

export default TeamsList;
