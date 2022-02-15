import React from "react";
import "../../styles/Profile.css";

function TechProfile(props: any) {
  return (
    <div className="profile-container">
      <h1 className="profile-header">Your Profile</h1>
      <span className="profile-top-box">
        <span className="name">{props.technician.name} </span>
        <span className="userType">{props.technician.userType} </span>
        <span className="email">{props.technician.email} </span>
      </span>
      <span className="profile-middle-box">2</span>
    </div>
  );
}

export default TechProfile;
