import React from "react";
import ReactDOM from "react-dom";
import ConnectedMenu from "./ConnectedMenu";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConnectedMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
