import React from "react";
import { FaChalkboardTeacher, FaGlobe } from "react-icons/fa"; // Import more relevant icons
import { motion } from "framer-motion"; // Import framer-motion
import "./MissionVision.css";

const MissionVision = ({ mission, vision }) => {
  return (
    <div className="mission-vision-container">
      <motion.div
        className="mission-vision-box"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h2><FaChalkboardTeacher className="icon" /> My Mission</h2>
        <p>
          To empower Black women with pleasure-centered sex education that
          eliminates shame, challenges purity culture, and celebrates sexual
          autonomy.
        </p>
      </motion.div>

      <motion.div
        className="mission-vision-box"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      >
        <h2><FaGlobe className="icon" /> My Vision</h2>
        <p>
          A world where all people, especially Black women, have unrestricted
          access to comprehensive sexual health information, resources, and
          services that affirm their right to pleasure, autonomy, and
          reproductive freedom.
        </p>
      </motion.div>
    </div>
  );
};

export default MissionVision;
