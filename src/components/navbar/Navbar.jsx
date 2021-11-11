import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#intro" className="logo" id="navbar-default">
                Pops.
      </a>
      <a href="#works">
      works
        </a>
        <a href="#portfolio">
      portfolio
        </a>
        <a href="#contact">
      contact me
        </a>
    </div>
  )
}






// <div className="wrapper">
//       <div className="left">
//         <a href="#intro" className="logo">
//           Pops.
//         </a>
       
       
//       </div>
//       <div className="right">
//         <div className="hamburger">
//           <span className="line1"></span>
//           <span className="line2"></span>
//           <span className="line3"></span>
//         </div>
//       </div>
//     </div> 










function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}