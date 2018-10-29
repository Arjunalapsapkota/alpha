import React, { Component } from "react";
import "./HomeHeader.css";
import SignUpBtn from "../SignUpBtn";
import LogInBtn from "../LogInBtn";
import { Link } from "react-router-dom";

class HomeHeader extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar bg-ds-blue fixed-top">
          {/* add router to the anchor tag */}
          <Link to="/">
            <div className="navbar-brand">
              <span className="devstart-brand">DevStart</span>
            </div>
          </Link>

          <div className="header-component-right">
            <SignUpBtn />
            <LogInBtn />
          </div>
        </nav>
      </header>
    );
  }
}

export default HomeHeader;
