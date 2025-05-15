import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Events from "../../data/speaking.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Speaking.css";
import Header from "../../components/Header/Header";
import { FaThumbtack, FaEye, FaUserTie, FaLaptopCode } from "react-icons/fa";

const Speaking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      <div className="speaking-container">
        <div className="speaking-box" data-aos="fade-up">
          <h2>Speaking Engagements</h2>
          <p>
            If you’d like me to speak at your event, let’s make it happen. I’ve
            spoken at 40+ events, sharing practical strategies on:
          </p>
        </div>

        <div className="speaking-text" data-aos="fade-up">
          <div className="speaking-list">
            <div className="speaking-item">
              <FaThumbtack className="speaking-icon" />
              <p>Branding & Brand Identity</p>
            </div>
            <div className="speaking-item">
              <FaEye className="speaking-icon" />
              <p>LinkedIn Visibility & Growth</p>
            </div>
            <div className="speaking-item">
              <FaUserTie className="speaking-icon" />
              <p>Personal Branding for Professionals</p>
            </div>
            <div className="speaking-item">
              <FaLaptopCode className="speaking-icon" />
              <p>Freelancing & Building a Profitable Brand</p>
            </div>
          </div>
          <a
            href="mailto:realdesmond2000@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <button className="book-button">Book Me to Speak</button>
          </a>
        </div>

        <div className="speaking-grid">
          {Events.events?.map((event, index) => (
            <div className="speaking-item" key={index}>
              <img src={event.image} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Speaking;
