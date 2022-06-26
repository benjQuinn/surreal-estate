import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders form correctly", () => {
    render(<AddProperty />);
    const form = screen.getByTestId("add-property-form");

    expect(form).toBeInTheDocument();
  });
});
