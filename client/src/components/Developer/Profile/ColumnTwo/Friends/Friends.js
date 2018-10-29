//User's Friends List
import React, { Component } from "react";
import "./Friends.css";
import FriendList from "./FriendList";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentWillMount() {
    let res = await fetch("/api/friends", { method: "GET" });
    let data = await res.json();
    let newData = data.map((i, n) => {
      return {
        key: n,
        uid: i.uid,
        firstName: i.firstName,
        lastName: i.lastName,
        profileImg: i.profileImg
      };
    });
    this.setState({
      data: newData
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Art's Friends</h2>
          <FriendList
          // uid={this.state.newData.uid}
          // key={this.state.newData.uid}
          // firstName={this.state.newData.firstName}
          // profileImg={this.state.newData.profileImg}
          />
        </div>
      </div>
    );
  }
}

export default Friends;
