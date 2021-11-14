import "./navbar.css";
import React, { useState } from "react";

export default function Navbar() {
  const [setPage] = useState("Home");
  return (
    <div className="navbarstuff">
      <a
        href="#intro"
        className="logo"
        id="nameMain"
        onClick={setPage("Home")}
      >
        Sheyla Popovich
      </a>
      <a href="#">About</a>
      <a href="#">Portfolio</a>
      <a href="#">Resume</a>
      <a href="#">Contact me</a>
    </div>
  );
}

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
//   return myFunction; 
// }

