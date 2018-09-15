import React from "react";
import ReactDOM from "react-dom";
import ConnectedLogin from "./ConnectedLogin";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConnectedLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
