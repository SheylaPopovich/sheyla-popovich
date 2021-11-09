import "./intro.css"
import profilePic from "../../images/me.png"

export default function Intro() {
    return (
        <div className="intro" id="intro">
        <div className="left">
        <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Sheyla Popovich</h1>
            <h3>
              Web Developer
            </h3>
          </div>
        </div>
        <div className="right">
        <div className="imgContainer">
            <img src={profilePic} alt="" />
          </div>

          <a href="#portfolio"></a>
        </div>
      </div>
    )
}


