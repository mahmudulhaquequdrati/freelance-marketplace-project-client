import { render, screen } from "@testing-library/react";
import { te } from "date-fns/locale";
import Home from "../pages";
// import Home from "@/pages/index";
describe("Home", () => {
  it("renders a heading", () => {
    const testingSetUp = (a, b) => {
      return a * b;
    };
    const result = testingSetUp(5, 10);
    expect(result).toBe(50);
  });
});
