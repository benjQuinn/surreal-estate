import React from "react";
import "../styles/side-bar.css";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import { BsFilterCircleFill } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="side-bar">
      <BsFilterCircleFill className="side-bar-icon" />
      <ul className="side-bar-links">
        <li className="side-bar-links-item">
          <Link
            to={buildQueryString("query", { city: "Manchester" })}
            className="item"
            data-testid="side-bar-manchester-link"
          >
            Manchester
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link
            to={buildQueryString("query", { city: "Leeds" })}
            className="item"
          >
            Leeds
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link
            to={buildQueryString("query", { city: "Liverpool" })}
            className="item"
          >
            Liverpool
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link
            to={buildQueryString("query", { city: "Sheffield" })}
            className="item"
          >
            Sheffield
          </Link>
        </li>
      </ul>
      <FaSort className="side-bar-icon" />
      <ul className="side-bar-links">
        <li className="side-bar-links-item">
          <Link to={buildQueryString("sort", { price: 1 })} className="item">
            Price: Low to High
          </Link>
        </li>
        <li className="side-bar-links-item">
          <Link to={buildQueryString("sort", { price: -1 })} className="item">
            Price: High to Low
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
