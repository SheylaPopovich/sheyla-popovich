//import "./intro.css";
import profilePic from "../../images/me.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="left">
          <h1>Sheyla Popovich</h1>
          <h2>Sheyla Popovich</h2>
          <h3>Full Stack Web Developer</h3>
          <p>
            Welcome to my portfolio! I am currently in the medical field
            transitioning into the exciting world of coding. I have a strong
            passion for learning and unleashing my creativity in a prosperous
            way, let’s go! As a Full Stack developer I am equally proficient in
            frontend (client-side) development and backend (server-side)
            development. I wish to create innovative websites while displaying
            the highest level of professionalism to achieve absolute client
            satisfaction. I will utilize my skills of HTML, CSS and Javascript
            acquired through attending bootcamp at the University of Denver and
            obtaining a Certificate in Full Stack Web Development to support
            your business from standing out from the rest. I can increase
            traffic to your website with a smooth user friendly interface as
            well as produce a responsive application to collect valuable data to
            reach company objectives. I enjoy collaborating with others breaking
            out of mundane work flows then to implement improved processes that
            will encourage work productivity. Working not smarter has been my
            life mantra but why not add a little spice to it as well? During
            your visit if you come across a project or something that has
            sparked your interest, please feel free to reach out at ✉️
            SheylaPopovich@gmail.com The creativity doesn't stop here I invite
            you to explore some of my other media pages listed below. I am a
            firm believer that knowledge is power and sharing that knowledge is
            incredibly prevailing. Shoot me a message with any inquires you may
            have or if you would like to collaborate!
          </p>
        
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src={profilePic} alt="" />
        </div>

        <a href="#portfolio"></a>
      </div>
    </div>
  );
}
