import React, { useEffect, useState } from "react";
import "../styles/properties.css";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const SURREAL_EASTATE_API_URL = `http://localhost:4000/api/v1`;

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${SURREAL_EASTATE_API_URL}/PropertyListing`)
          .then((res) => {
            setProperties(res.data);
            console.log(res.data);
            console.log(res.headers["content-type"]);
          });
      } catch (err) {
        setAlert({ message: "Unable to fetch data. Try again later." });
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="properties">
      <h1>Properties</h1>
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <div key={property._id} className="properties-item">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
