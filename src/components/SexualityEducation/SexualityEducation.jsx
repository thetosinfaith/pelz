import React from "react";
import Roots from "../../assets/mk.jpg";
import "./SexualityEducation.css";
import { motion } from "framer-motion";

const SexualityEducation = () => {
  return (
    <div className="sexuality-education-section">
      <section className="sexuality-education-description-section">
        <div className="sexuality-education-description-container">
          <div className="sexuality-education-img-content">
            <motion.div
              className="sexuality-education-main-image-container"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={Roots}
                alt="Sexuality Education"
                className="sexuality-education-main-image"
              />
            </motion.div>
          </div>

          <div className="sexuality-education-description-content">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="sexuality-education-heading"
            >
              Sexuality Education<span className="inner-service"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="sexuality-education-description"
            >
              With over ten years of experience speaking to diverse
              audiences, from toddlers to older adults; I deliver clear,
              non-judgmental, and culturally respectful education on topics
              including comprehensive sex education, safe sex, pleasure,
              contraception, safe abortions. This experience has spaned settings
              such as Rural and urban communities, High schools and
              universities, Religious centers, media platforms & Health
              facilities
              <br />
              <motion.button
                className="coaching-button"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Invite Dr. OAK to Speak
              </motion.button>
            </motion.p>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default SexualityEducation;
