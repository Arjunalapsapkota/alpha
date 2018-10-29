import React from "react";
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav>
        <ul className={drawerClasses}>
              <a href="/developer/dashboard">Dev Dash</a>
              <br></br>
              <a href="/developer/profile">My Profile</a>
              <br></br>
              <a href="/sponsor/dashboard">Sponsor Dash</a>
              <br></br>
              <a href="/sponsor/profile">Sponsors</a>
          </ul>
    </nav>
    )
};

export default SideDrawer;