import React from "react";
import ProfileHeader from "./ProfileHeader";
import "./ColumnOne.css";
import QuickStart from "./QuickStart";


const ColumnOne = () => (
    <div class="col-3">
        <ProfileHeader />
        <QuickStart />
    </div>
  );


export default ColumnOne;