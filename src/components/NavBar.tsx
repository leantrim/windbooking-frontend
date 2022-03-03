import React from "react";
import { Link as NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = ({ user }: any) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/windfarm">Windfarms</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/profile">{user.name}</NavLink>

              <NavLink to="/logout">Logout</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/techtable">Techtable</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
