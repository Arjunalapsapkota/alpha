import React, { Component } from "react";
import Header from "../../Global/Header";
import ColumnOne from "./ColumnOne";
import ColumnTwo from "./ColumnTwo";
import "../../Global/css/developer-global.css";
import "./Profile.css";
import SideDrawer from "../../Global/SideDrawer";
import Backdrop from "../../Global/Backdrop";


class Profile extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;

      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Header drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            {sideDrawer}
        <div className="profile container">
          <div className="row">
            <ColumnOne />
            <ColumnTwo />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
