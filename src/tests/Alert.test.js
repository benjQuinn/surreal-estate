import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/error/i).textContent).toBe("Error!");
  });

  it("displays a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!" success />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/success/i).textContent).toBe("Success!");
  });

  it("does not render an error or a success message if message prop is empty", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
