import React, { useState } from "react";
import "../styles/add-property.css";
import { IoAddCircle } from "react-icons/io5";
import axios from "axios";
import Alert from "./Alert";

const API_URL = `http://localhost:4000/api/v1`;

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = async (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    try {
      await axios.post(`${API_URL}/PropertyListing`, fields);
      setAlert({
        message: "Property successfully added!",
        isSuccess: true,
      });
    } catch (err) {
      console.log(err);
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      });
    }
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h1>Add a Property</h1>
      <Alert message={alert.message} success={alert.isSuccess} />
      <form data-testid="add-property-form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <br />
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            type="text"
            placeholder="Property tagline..."
          />
        </label>
        <label htmlFor="type">
          Type
          <br />
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <br />
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            type="number"
            placeholder="How many bedrooms?"
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <br />
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            type="number"
            placeholder="How many bathrooms?"
          />
        </label>
        <label htmlFor="price">
          Price
          <br />
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            type="number"
            placeholder="Price.."
          />
        </label>
        <label htmlFor="city">
          City
          <br />
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            type="text"
            placeholder="john.smith@email.co.uk"
          />
        </label>
        <button className="add-property-button" type="submit">
          <IoAddCircle className="submit-icon" />
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
