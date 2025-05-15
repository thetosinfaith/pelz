import React from "react";
import MK from "../../assets/mk.png";
import DK from "../../assets/bb.png";

import "./ClassesSection.css";

const ClassesSection = () => {
  return (
    <div className="classes-container">
      <div className="class-box yellow-box">
        <img src={DK} alt="Online Classes" className="class-image left" />
        <div className="class-content">
          <h2>Hire a Social Media Manager</h2>
          <p>
            Uncover the world of design through our online classes. Learn,
            collaborate, and design with us, anytime, anywhere.
          </p>
          <button className="class-button">View Online Class Plans</button>
        </div>
      </div>

      <div className="class-box blue-box">
        <div className="class-content">
          <h2>Hire a LinkedIn Ghostwriter</h2>
          <p>
            On our quest to continue expanding and bringing design education to
            your doorstep, we have established a couple of physical learning
            spaces.
          </p>
          <button className="class-button">View Physical Class Plans</button>
        </div>
        <img src={MK} alt="Physical Classes" className="class-image right" />
      </div>
    </div>
  );
};

export default ClassesSection;
