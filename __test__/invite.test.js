import React from "react";
import { render, screen, within } from "@testing-library/react";
import GetLinks from "../components/Invite/GetLinks";
import Steps from "../components/Invite/Steps";

describe("invite", () => {
  it("get-link checking", () => {
    render(<GetLinks />);
    const { getByText } = within(screen.getByTestId("invite-link"));
    expect(getByText("Your Invite Link")).toBeInTheDocument();
  });
  it("steps checking", () => {
    render(<Steps />);
    const { getByText } = within(screen.getByTestId("steps-id"));
    expect(getByText("Three Easy Steps")).toBeInTheDocument();
  });
});
