import React from "react";
import { Link } from "react-router-dom";

const AccountBtn = () => (
  <li class="nav-item dropdown">
    <Link
      className="nav-link dropdown-toggle"
      id="dropdown01"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Account
    </Link>
    <div class="dropdown-menu" aria-labelledby="dropdown01">
      <Link to="/developer/profile" className="dropdown-item">
        Edit Profile
      </Link>
      <Link to="/developer/dashboard" className="dropdown-item">
        Account Settings
      </Link>
      {/* Add more dropdown list if needed */}
    </div>
  </li>
);

export default AccountBtn;
