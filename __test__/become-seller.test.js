import React from "react";
import { render, screen, within } from "@testing-library/react";
// import SellerBanner from "../components/BecomeASeller/SellerBanner";
import SellerHeader from "../components/BecomeASeller/SellerHeader";

describe("become-seller", () => {
  it("seller banner checking", () => {
    render(<SellerHeader />);
    const { getByText } = within(screen.getByTestId("seller-search"));
    expect(getByText("Search")).toBeInTheDocument();
  });
});
