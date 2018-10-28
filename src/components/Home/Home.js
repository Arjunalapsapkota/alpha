import React, { Component } from "react";
import Header from "../Home/Header";
import Jumbotron from "../Home/Jumbotron";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
