import React from "react";
import { NavLink } from "react-router-dom";
import "./InnerBanner.css";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import TextSlider from '../ScrollBar/ScrollBar'


const InnerBanner = () => {
  return (
   <>
    <div className="fika-container">
    <TextSlider/>

      <div className="header-section"></div>

      <div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="inspired">Teaching Sexuality</span>{" "}
            <span className="empowered">Research</span>{" "}
            <span className="conscious">Pleasure Coaching. </span>
          </motion.h1>
          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="welcome">I curate FREE tips,</span>{" "}
            <span className="fika">
              and content to equip you with the necessary knowledge & skills
            </span>{" "}
            <span className="we-are">
              to discuss sexuality with your children/students.
            </span>{" "}
            <span className="responsibly">
              I also teach you fun new pleasure techniques
            </span>{" "}
            <span className="sourced">to improve your foreplay skills </span>{" "}
            <span className="welcome">Take a glimpse</span>{" "}
            <span className="fika">at my services</span>{" "}
          </motion.p>

          <NavLink to="/services">
            <motion.button
              className="shop-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <a
                href="https://forms.gle/u5G6n4YnYeq7M3KM9"
                target="_blank"
                rel="noopener noreferrer"
              >
                TAKE ME TO SERVICES <FaArrowRight />
              </a>
            </motion.button>
          </NavLink>
        </motion.div>
      </div>

      <div className="scalloped-border"></div>
    </div>
   </>
  );
};

export default InnerBanner;
