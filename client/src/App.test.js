import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./components/Nav";
import playerData from "../../data.js";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Player data is present", () => {
  expect(playerData.data[0].name).toBe("Alex Morgan");
  expect(playerData.data[0].country).toBe("United States");
  expect(playerData.data[0].searches).toBe(100);
});

test("App renders without crashing", () => {
  render(<App />);
});

test("Nav renders without crashing(on-field works? )", () => {
  render(<Nav />);
});
