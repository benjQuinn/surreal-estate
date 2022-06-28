import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "5 bedroom house",
    type: "Detached",
    bedrooms: 5,
    bathrooms: 2,
    city: "Manchester",
    price: 500000,
    email: "qwerty@email.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(<PropertyCard {...validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders prop values correctly", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText(/5 bedroom house/i).textContent).toBe(validProps.title);
    expect(getByText(/detached - manchester/i).textContent).toBe(
      `${validProps.type} - ${validProps.city}`
    );
    expect(getByText(5).textContent).toBe(validProps.bedrooms.toString());
    expect(getByText(2).textContent).toBe(validProps.bathrooms.toString());
    expect(getByText(/500,000.00/).textContent).toBe(
      validProps.price.toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  });
});
