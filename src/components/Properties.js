import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/properties.css";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";

const API_URL = `http://localhost:4000/api/v1`;

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${API_URL}/PropertyListing`)
          .then((res) => setProperties(res.data));
      } catch (err) {
        setAlert({ message: "Unable to fetch data. Try again later." });
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${API_URL}/PropertyListing/${search}`)
          .then((res) => setProperties(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className="properties-outer">
      <SideBar />
      <div className="properties-inner">
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property) => (
          <div key={property._id} className="properties-item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
