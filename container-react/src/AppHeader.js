import React from "react";
import { NavLink } from "react-router-dom";
import "./AppHeader.css";

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>🍽 Feed me</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/browse">Browse restaurants</NavLink>
        </li>
        <li>
          <NavLink to="/restaurant">Restaurant</NavLink>
        </li>
        <li>
          <NavLink to="/vue">Vue</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
