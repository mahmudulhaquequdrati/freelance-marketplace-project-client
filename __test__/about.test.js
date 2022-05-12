import React from "react";
import { render, screen, within } from "@testing-library/react";
import Banner from "../components/About/Banner";
import Header from "../components/About/Header";
import KeepItConnect from "../components/About/KeepItConnect";
describe("About component", () => {
  it("about banner checking", () => {
    render(<Banner />);
    const { getByText } = within(screen.getByTestId("About-Banner"));
    expect(getByText("About Workfleek Why We Are Best?")).toBeInTheDocument();
  });
  it("about header checking", () => {
    render(<Header />);
    const query = screen.getByRole("main");
    expect(query).toBeInTheDocument();
  });
  it("about keep connect checking", () => {
    render(<KeepItConnect />);
    const { getByText } = within(screen.getByTestId("keep-connect"));
    expect(getByText("Be In Control. keep In Contact.")).toBeInTheDocument();
  });
});
