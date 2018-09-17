import React from "react";
import ReactDOM from "react-dom";
import ConnectedRegister from "./ConnectedRegister";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConnectedRegister />, div);
  ReactDOM.unmountComponentAtNode(div);
});
