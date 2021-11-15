import "./navbar.css";
import React, { useState } from "react";

export default function Navbar() {
  const [setPage] = useState("Home");
  return (
    <div className="navbarstuff">
      <a href="#intro" className="logo" id="nameMain" onClick={setPage("Home")}>
        Sheyla Popovich
      </a>
      <a href="#">About</a>
      <a href="#">Portfolio</a>
      <a href="#">Resume</a>
      <a href="#">Contact me</a>
    </div>
  );
}
