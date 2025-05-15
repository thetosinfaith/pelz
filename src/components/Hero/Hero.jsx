import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import heroImg from "../../assets/kings.png";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
            <Header/>

      <div className="hero-main">
        <div className="hero-image">
          <img src={heroImg} alt="Sex Coach" />
        </div>
        <div className="hero-contentt" data-aos="fade-left" data-aos-delay="500">
          <h1>Meet Oluwapelumi Alesinloye-King</h1>
          <p className="hero-p">
            Hi, I’m Oluwapelumi Alesinloye-King, a certified holistic sexuality educator and a PhD researcher. My work centers on sexual and reproductive health behaviors. I teach, research and help people better understand and take care of their sexual and reproductive health.
          </p>
          <button className="click-me">
            <a
              href="https://forms.gle/u5G6n4YnYeq7M3KM9"
              target="_blank"
              rel="noopener noreferrer"
            >
              LEARN MORE <FaArrowRight />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
