import React from "react";
import "../styles/navbar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="?">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="?">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
