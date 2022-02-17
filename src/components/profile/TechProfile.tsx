import React, { useEffect } from "react";
import "../../styles/Profile.css";

function TechProfile(props: any) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="profile-container">
      <h1 className="profile-header">Your Profile</h1>
      <button onClick={() => props.onEditClick()}>Edit</button>
      <span className="profile-top-box">
        <span className="name">{props.technician.name} </span>
        <span className="userType">{props.technician.userType} </span>
        <span className="email">{props.technician.email} </span>
      </span>
      <span className="profile-middle-box">
        <span>Kompetenser</span>
      </span>
    </div>
  );
}

export default TechProfile;
