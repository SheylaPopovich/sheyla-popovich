import "./intro.css";
import profilePic from "../../images/me.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="left">
        <h1 id="name">Web Developer</h1>

        <p id="bio">
          Welcome to my portfolio! I wish to create innovative websites while
          displaying the highest level of professionalism to achieve absolute
          client satisfaction. I enjoy collaborating with others breaking out of
          mundane work flows. Working not smarter has been my life mantra but
          why not add a little spice to it as well? The creativity doesn't stop
          here I invite you to explore some of my other media pages listed
          below. I am a firm believer that knowledge is power and sharing that
          knowledge is incredibly prevailing. Shoot me a message with any
          inquires you may have or if you would like to collaborate!
        </p>
      </div>

      <div className="right">
        <img
          src={profilePic}
          alt="Picture of Sheyla Popovich"
          class="img-fluid"
          id="profilePic"
        />
      </div>
    </div>
  );
}
