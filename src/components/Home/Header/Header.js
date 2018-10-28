import React, { Component } from "react";
import "./Header.css";
import SignUpBtn from "../../Global/SignUpBtn";
import LogInBtn from "../../Global/LogInBtn";


class Header extends Component {
  render() {
   

  return(
  <header className="header">
  
      
      <nav className="navbar bg-ds-blue fixed-top">
      
        {/* add router to the anchor tag */}
        <a className="navbar-brand">
          <span className="devstart-brand">DevStart</span>
        </a>
        <div>
        </div>
    
        <SignUpBtn />
        <LogInBtn />
    
      </nav>
  </header>
);
  }
}

export default Header