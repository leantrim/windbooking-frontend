import React from "react";
import "../../styles/Profile.css";

function PlannerProfile(props: any) {
  return (
    <div className="profile-container">
      <h1 className="profile-header">Your Profile</h1>
      <span className="profile-top-box">
        <span className="name">{props.planner.name} </span>
        <span className="userType">{props.planner.userType} </span>
        <span className="email">{props.planner.email} </span>
      </span>
      <span className="profile-middle-box">2</span>
    </div>
  );
}

export default PlannerProfile;
