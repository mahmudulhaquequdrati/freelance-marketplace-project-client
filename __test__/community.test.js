import React from "react";
import { render, screen, within } from "@testing-library/react";
import Coummunity from "../pages/community";
import Banner from "../components/Community/Banner";
// import ChatApp from "../pages/chat";

// import Home from "@/pages/index";
describe("Community", () => {
  it("community checking", () => {
    render(<Coummunity />);
    const query = screen.getByRole("main");

    expect(query).toBeInTheDocument();
  });

  it("community banner checking", () => {
    render(<Banner />);
    const { getByText } = within(screen.getByTestId("sign-up-test"));
    expect(getByText("Sign up now")).toBeInTheDocument();
  });
});
