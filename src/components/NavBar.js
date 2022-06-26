import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { GiCastle } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <GiCastle className="navbar-logo-icon" data-testid="navbar-logo-icon" />
        <h1 className="navbar-logo-title">Surreal Estate</h1>
      </div>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
