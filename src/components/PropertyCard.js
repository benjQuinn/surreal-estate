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
  const formattedPrice = price.toLocaleString("en-GB", {
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
      <button className="property-card-email-button" type="button" href={email}>
        <FaRegEnvelope className="propert-card-icon" />
        Email
      </button>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropType.string.isRequired,
  type: PropType.string.isRequired,
  bathrooms: PropType.number.isRequired,
  bedrooms: PropType.number.isRequired,
  price: PropType.number.isRequired,
  city: PropType.string.isRequired,
  email: PropType.string.isRequired,
};

export default PropertyCard;
