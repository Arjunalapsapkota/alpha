import React, { Component } from "react";
import Header from "../../Global/Header";
import ColumnOne from "../Dashboard/ColumnOne";
import ColumnTwo from "../Dashboard/ColumnTwo";
import ColumnThree from "../Dashboard/ColumnThree";
import "./Dashboard.css";
import requireAuth from "../../requireAuth.js";
import SideDrawer from "../../Global/SideDrawer";
import Backdrop from "../../Global/Backdrop";

class Dashboard extends Component {
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
      <div class="container-flex">
        <div style={{ height: "100%" }}>
          <div className="wrapper">
            <div className="row dev-db-row">
              <Header drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
              {sideDrawer}
              <ColumnOne />

              <ColumnTwo />

              <ColumnThree />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default requireAuth(Dashboard);
