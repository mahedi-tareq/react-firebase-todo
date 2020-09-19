import React from "react";
import { Link } from "react-router-dom";
import EmployeeList from "./EmployeeList";

export default function Layout() {
  return (
    <div className="container">
      <EmployeeList />
    </div>
  );
}
