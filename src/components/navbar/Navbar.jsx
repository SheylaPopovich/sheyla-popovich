import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">
          Pops.
        </a>
        <div className="itemContainer">
          <span>+44 924 12 74</span>
        </div>
        <div className="itemContainer">
          <span>safak@genius.com</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>
  );
}
