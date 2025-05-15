import "./Polariod.css";
import img1 from "../../assets/kings.png";
import img2 from "../../assets/kings.png";
import img3 from "../../assets/kings.png";
import { NavLink } from "react-router-dom";
import img4 from "../../assets/kings.png";

function Polariod() {
  return (
    <div className="landing-container">
      <div className="polaroid top-left">
        <img src={img4} alt="Person with dog" />
      </div>

      <div className="polaroid top-right">
        <img src={img1} alt="Person in white" />
      </div>

      <div className="polaroid bottom-left">
        <img src={img2} alt="Person with dark hair" />
      </div>

      <div className="polaroid bottom-right">
        <img src={img3} alt="Person with plants" />
      </div>

      <div className="contents">
        <h1 className="title">
          Website Designer,
          <br />
          Frontend Developer, <br />
          Tech Content Creator
        </h1>

        <p className="subtitle">
          Welcome to my little corner of the internet, I’m a website designer and developer, but I do things differently. I hate jargon, I hate complicated technical words, and I really hate websites that only look good until you scratch the surface and realise they don’t actually work!
        </p>

        <NavLink to="/about" className="cta-buttonn">
          Who is Tosin?
        </NavLink>
      </div>

    </div>
  );
}

export default Polariod;