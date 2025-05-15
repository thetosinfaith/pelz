import React from "react";
import { motion } from "framer-motion"; 
import "./About_Pelumi.css";
import KP from "../../assets/kp.jpg";

const About_Pelumi = () => {
  return (
    <section className="about-pelumi-container">
      <motion.div
        className="about-pelumi-images"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src={KP} alt="Dr. Donna" className="about-pelumi-main-img" />
      </motion.div>

      <motion.div
        className="about-pelumi-text"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        <motion.h4
          className="about-pelumi-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          MEET OLUWAPELUMI ALESINLOYE-KING
        </motion.h4>

        <motion.h1
          className="about-pelumi-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        >
          Holistic Sex Coach. Educator. Author.
        </motion.h1>

        <motion.p
          className="about-pelumi-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
        >
          My journey began at age 7 when I first read "Every Woman," sparking a
          fascination with the human body and reproduction that I never imagined
          would lead me to become a sex educator. With a background in human
          anatomy, a Master's degree in sexual reproductive health, and a
          certification to practice as a holistic Sexuality Educator, I've
          dedicated my career to breaking taboos.
        </motion.p>

        <motion.button
          className="about-pelumi-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
        >
          LEARN ABOUT MY STORY
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About_Pelumi;
