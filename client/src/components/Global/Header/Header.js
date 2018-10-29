import React from "react";
import "./Header.css";
import DrawerToggle from "../DrawerToggle";
import { Link } from "react-router-dom";

const Header = props => (
  <header className="header">
    <nav className="navbar bg-ds-blue fixed-top">
      <DrawerToggle click={props.drawerClickHandler} />
      {/* add router to the anchor tag */}
      <Link to="/">
        <div className="navbar-brand">
          <span className="devstart-brand">DevStart</span>
        </div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        {/* import SignInBtn and LogInBtn here */}
      </div>
    </nav>
  </header>
);

export default Header;
