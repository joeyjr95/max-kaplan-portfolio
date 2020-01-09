import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { PortProvider } from "./Context/Context";

ReactDOM.render(
  <BrowserRouter>
    <PortProvider>
    <App />
    </PortProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

