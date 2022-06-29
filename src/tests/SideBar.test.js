import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import SideBar from "../components/SideBar";

describe("SideBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Router>
        <SideBar />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders links correctly", () => {
    const { getByText } = render(
      <Router>
        <SideBar />
      </Router>
    );
    const manchesterLink = getByText(/manchester/i);
    const leedsLink = getByText(/leeds/i);
    const liverpoolLink = getByText(/liverpool/i);
    const sheffieldLink = getByText(/sheffield/i);

    expect(manchesterLink).toBeInTheDocument();
    expect(leedsLink).toBeInTheDocument();
    expect(liverpoolLink).toBeInTheDocument();
    expect(sheffieldLink).toBeInTheDocument();
  });
});
