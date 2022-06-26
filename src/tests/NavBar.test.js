import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders logo correctly", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const logoIcon = screen.getByTestId("navbar-logo-icon");
    const logoText = screen.getByText(/surreal estate/i);

    expect(logoIcon).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
  });

  it("renders links correctly", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const propertiesLink = screen.getByText(/properties/i);
    const addPropertyLink = screen.getByText(/add a property/i);

    expect(propertiesLink).toBeInTheDocument();
    expect(addPropertyLink).toBeInTheDocument();
  });
});
