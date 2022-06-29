import React from "react";
import "../styles/property-card.css";
import PropType from "prop-types";
import { GiCastle } from "react-icons/gi";
import { FaBath, FaBed, FaPoundSign, FaRegEnvelope } from "react-icons/fa";

const PropertyCard = ({
  title,
  type,
  city,
  bedrooms,
  bathrooms,
  price,
  email,
}) => {
  const formattedPrice = parseInt(price, 10).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="property-card">
      <div className="property-card-img">
        <GiCastle className="navbar-logo-icon" data-testid="navbar-logo-icon" />
      </div>
      <ul className="property-card-items">
        <li className="property-card-item">{title}</li>
        <li className="property-card-item">
          {type} - {city}
        </li>
        <li className="property-card-item">
          <FaBed className="propert-card-icon" />
          {bedrooms}
        </li>
        <li className="property-card-item">
          <FaBath className="propert-card-icon" />
          {bathrooms}
        </li>
        <li className="property-card-item">
          <FaPoundSign className="propert-card-icon" />
          {formattedPrice}
        </li>
      </ul>
      <a href={`mailto:${email}`}>
        <button className="property-card-email-button" type="button">
          <FaRegEnvelope className="propert-card-icon" />
          Email
        </button>
      </a>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropType.string.isRequired,
  type: PropType.string.isRequired,
  bathrooms: PropType.string.isRequired,
  bedrooms: PropType.string.isRequired,
  price: PropType.string.isRequired,
  city: PropType.string.isRequired,
  email: PropType.string.isRequired,
};

export default PropertyCard;
