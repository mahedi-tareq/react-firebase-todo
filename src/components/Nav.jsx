import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="main_nav">
        <h1 className="brand">Professionals</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-new">Add New</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
