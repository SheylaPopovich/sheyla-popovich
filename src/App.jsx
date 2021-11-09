import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./App.css";
import Footer from "./footer";




function App() {
  return(
    <div className= "app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
    </div>
    
  )
}

export default App;
