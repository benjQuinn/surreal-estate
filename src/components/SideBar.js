import React from "react";
import "../styles/side-bar.css";
import { Link } from "react-router-dom";
import { BsFilterCircleFill } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="side-bar">
      <BsFilterCircleFill className="side-bar-icon" />
      <ul className="side-bar-links">
        <li className="side-bar-links-item">
          <Link
            to={`/?query={"city": "Manchester"}`}
            className="item"
            data-testid="side-bar-manchester-link"
          >
            Manchester
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link to={`/?query={"city": "Leeds"}`} className="item">
            Leeds
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link to={`/?query={"city": "Liverpool"}`} className="item">
            Liverpool
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link to={`/?query={"city": "Sheffield"}`} className="item">
            Sheffield
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
