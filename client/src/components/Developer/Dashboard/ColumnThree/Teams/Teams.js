//User's Friends List
import React, { Component } from "react";
import "./Teams.css";
import TeamsList from "./TeamsList";
//importing mock friends data. Remove when link to BE
import teams from "../../../../../models/teams.json";

class Teams extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    teams
  };

  render() {
    return (
      <div className="teams">
      <div className="card">
        <div className="card-body">
        
          <h2 className="card-title">Teams</h2>
          <button className="add-team btn btn-primary"><strong>+</strong></button>
        
          {this.state.teams.map(teams => (
            <TeamsList
              id={teams.id}
              key={teams.id}
              name={teams.name}
              image={teams.image}
            />
          ))}
        </div>
      </div>
    </div>
    );
  }
}

export default Teams;
