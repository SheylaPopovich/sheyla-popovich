import "./navbar.css";
import React, {useState} from "react";


export default function Navbar() {
  const [page, setPage]= useState('Home')
  return (
    <div className="navbarstuff">
      <a href="#intro" className="logo" id="navbar-default" onClick={setPage('Home')}>
        Sheyla Popovich
      </a>
      <a href="#" onClick={setPage('about')}>About</a>
      <a href="#" >portfolio</a>
      <a href="#">contact me</a>
    </div>
  );
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
