import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <StrictMode>
    <App blah={123} />
  </StrictMode>,
  document.getElementById("root")
);
