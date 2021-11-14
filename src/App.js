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
        <a
          href="#portfolio"
          onClick={() => {
            setPage("portfolio");
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => {
            setPage("contact");
          }}
        >
          Contact me
        </a>
        <a
          href="#resume"
          onClick={() => {
            setPage("Resume");
          }}
        >
          Resume
       
        </a>
      </div>
     
        

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
        ) :(
          <p>testing</p>
        )}
    <Landing />
         {page === "Resume" ?   <Resume />:<></>}
        

        <Footer />



       
      </div>
    </div>
  );
}

export default App;

