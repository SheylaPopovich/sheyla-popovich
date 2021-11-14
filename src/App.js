import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./App.css";
import "./components/navbar/navbar.css";
import Footer from "./footer";
import Landing from "./components/landing/LandingPg";
import React, { useState } from "react";
import Resume from "./components/resume/ResumeP";

function App() {
  const [page, setPage] = useState("");

  function setHome() {
    setPage("");
  }
  function setAbout() {
    setPage("about");
  }
  function setLanding() {
    setPage();
  }

  console.log(page);
  return (
    <div className="app">
      <nav className="navbarstuff navbar-expand-md navbar-dark ">
        <a href="#intro" className="logo" id="navbar-default" onClick={setHome}>
         Sheyla Popovich
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
         
          <ul className="navbar-nav ">
            <li className="nav-item">
          <a href="#about" onClick={setAbout}>
            About
          </a>
          </li>
        
          <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => {
              setPage("portfolio");
            }}
          >
            Projects
          </a>
          </li>
         
          <li className="nav-item">
          <a
            href="#contact"
            onClick={() => {
              setPage("contact");
            }}
          >
            Contact me
          </a>
         </li>
         <li className="nav-item">
          <a
            href="#resume"
            onClick={() => {
              setPage("Resume");
            }}
          >
            Resume
            {/* <Resume /> */}
          </a>
          </li>
          </ul>
        </div>
      </nav>

      <div className="sections">
        {page === "about" ? (
          <div>
            <Intro />
          </div>
        ) : page === "contact" ? (
          <div>
            <Contact />
          </div>
        ) : page === "portfolio" ? (
          <div>
            <Portfolio />
          </div>
        ) : (
          <p>testing</p>
        )}

        {page === "portfolio" ? <Portfolio /> : <p></p>}
        {page === "Resume" ? <Resume /> : <p></p>}

        <Footer />
      </div>
    </div>
  );
}

export default App;
