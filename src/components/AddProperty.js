import React, { useState } from "react";
import "../styles/add-property.css";
import { IoAddCircle } from "react-icons/io5";

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
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h1>Add a Property</h1>
      <form onSubmit={handleAddProperty}>
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
        <button type="submit">
          <IoAddCircle className="submit-icon" />
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
