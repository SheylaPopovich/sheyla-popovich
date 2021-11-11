import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
//import "./App.css";
import "./components/navbar/navbar.css";
import Footer from "./footer";
import Landing from "./components/landing/LandingPg"

import React, { useState } from "react";

function App() {
  
  const [page, setPage] = useState("");

  function setHome() {
    setPage("");
  }
  function setAbout() {
    setPage("about");
  }

  console.log(page);
  return (
    <div className="app">
     
      <div className="navbarstuff">
      
        <a href="#intro" className="logo" id="navbar-default" onClick={setHome}>
          Pops.
        </a>
        <a href="#about" onClick={setAbout}>
          About
        </a>
        <a href="#">portfolio</a>
        <a
          href="#"
          onClick={() => {
            setPage("contact");
          }}
        >
          contact me
        </a>
      </div>
     
      <div className="sections">
        
        {page === "about" ? (
          <Intro />
        ) : page === "contact" ? (
          <Contact />
        ) : (
          <h1>Hello</h1>
        )  
        }

        <Footer />
        
      </div>
    </div>
  );
}

export default App;
