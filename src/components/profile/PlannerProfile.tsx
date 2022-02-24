import React from "react";
import "../../styles/Profile.css";
import { Planner } from "../../types/Planner";

interface props {
  planner: Planner;
}

function PlannerProfile(props: props) {
  return (
    <div className="profile-container">
      <h1 className="profile-header-planner">Your Profile</h1>
      <span className="profile-top-box-planner">
        <span className="name">{props.planner.name} </span>
        <span className="userType">{props.planner.userType} </span>
        <span className="email">{props.planner.email} </span>
      </span>
    </div>
  );
}

export default PlannerProfile;
