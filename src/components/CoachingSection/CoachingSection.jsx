import React from "react";
import Roots from "../../assets/woman.jpg";
import "./CoachingSection.css";
import { motion } from "framer-motion";

const CoachingSection = () => {
  return (
    <div className="CoachingPages-section">
      <section className="coaching-description-section">
        <div className="coaching-description-container">
          <div className="coaching-img-content">
            <motion.div
              className="coaching-main-image-container"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={Roots}
                alt="Coaching"
                className="coaching-main-image"
              />
            </motion.div>
          </div>

          <div className="coaching-description-content">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="coaching-heading"
            >
              Brand Consulting<span className="inner-service"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="coaching-description"
            >
              I provide strategic guidance for sexual health organizations and sex tech 
companies looking to increase their impact and visibility. With experience 
pioneering influencer marketing in Nigeria's expansive and diverse sexual 
and reproductive health space, I can help you navigate sensitive markets 
with effective, culturally-appropriate strategies.
              <ul>
                <li>Content curation and strategy.</li>
                <li>Promotional campaign development.</li>
                <li>Regional market entry guidance.</li>
                <li>Impact maximization and fund utilization.</li>
              </ul>
              <motion.button
                className="coaching-button"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Let's Talk Strategy
              </motion.button>
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachingSection;
