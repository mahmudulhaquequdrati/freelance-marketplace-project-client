import React from "react";
import { render, screen, within } from "@testing-library/react";
import Dashboard from "../pages/dashboard";

describe("testing dashboard", () => {
  it("community checking", () => {
    render(<Dashboard />);
    const query = screen.getByRole("main");
    expect(query).toBeInTheDocument();
  });
});
