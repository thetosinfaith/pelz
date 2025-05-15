import React from "react";
import Roots from "../../assets/certified.jpg";
import "./ServicesSection.css";
import { motion } from "framer-motion";


const ServicesSection = () => {
  return (
    <div className="FundraisingPages-section">
      <section className="fundraising-description-section">
        <div className="fundraising-description-container">
          <div className="fundraising-img-content">
            <motion.div
              className="fundraising-main-image-container"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={Roots}
                alt="Fundraising"
                className="fundraising-main-image"
              />
            </motion.div>
          </div>

          <div className="fundraising-description-content">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="fundraising-heading"
            >
              Sex Coaching<span className="inner-service"></span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="coaching-description"
            >
              Have you been curious about sex therapy in general? Sex therapy is
              great for individuals, regardless of if you are in a relationship
              or not. If you're ready to make your relationship stronger, more
              understanding, and just plain better, this is your path to getting
              there.
              <ul>
                <li>Learn new pleasure techniques.</li>
                <li>Improve your foreplay skills.</li>
                <li>Enhance intimate communication.</li>
                <li>Explore their bodies with confidence.</li>
              </ul>
              <motion.button
                className="coaching-button"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Talk to Coach OAK{" "}
              </motion.button>
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
