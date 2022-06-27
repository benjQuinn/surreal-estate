import React from "react";
import "../styles/properties.css";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const validProps = {
    title: "5 bedroom house",
    type: "Detached",
    bedrooms: 5,
    bathrooms: 2,
    city: "Manchester",
    price: 500000,
    email: "qwerty@email.com",
  };

  return (
    <div className="properties">
      <h1>Properties</h1>
      <PropertyCard validProps={validProps} />
    </div>
  );
};

export default Properties;
