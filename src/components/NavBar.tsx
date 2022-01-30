import React from "react";
import { Link as NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/windparks">Windparks</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
