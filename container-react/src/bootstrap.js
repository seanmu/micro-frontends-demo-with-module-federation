import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App.js";

console.log("this is bootstrap.js");
render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
