import React from "react";
import { motion } from "framer-motion";
import "./PremiumServices.css";
import { NavLink } from "react-router-dom";
import { 
  FaUserTimes, 
  FaExclamationTriangle, 
  FaComments, 
  FaMapSigns, 
  FaFrownOpen, 
  FaPuzzlePiece 
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaUserTimes />, 
    title: "Content Creation",
    description: "You have a business or personal brand, but it feels invisible, people aren’t noticing you.",
    className: "bg-black",
  },
  {
    icon: <FaExclamationTriangle />, 
    title: "Brand Identity Revamp",
    description: "Your brand looks unprofessional, making you feel hesitant to put yourself out there.",
    className: "bg-red",
  },
  {
    icon: <FaComments />, 
    title: "Ghostwriting",
    description: "You’re struggling to attract high-value clients because your brand doesn’t communicate the right message.",
    className: "bg-black",
  },
  {
    icon: <FaMapSigns />, 
    title: "Audience Growth",
    description: "You lack clarity on how to position your brand for impact, recognition, and credibility.",
    className: "bg-red",
  },
  {
    icon: <FaFrownOpen />, 
    title: "Monetization",
    description: "You feel intimidated by competitors who seem to have a stronger presence.",
    className: "bg-black",
  },
  {
    icon: <FaPuzzlePiece />, 
    title: "Page Management",
    description: "You’ve tried DIY branding or worked with designers before, but your brand still doesn’t feel strategic or aligned.",
    className: "bg-red",
  },
];

const PremiumServices = () => {
  return (
    <>
      <section className="premium-services">
        <div className="premium-services-container">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`premium-service ${benefit.className}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div>
                <h1>
                  <span className="icon-large">{benefit.icon}</span>
                </h1>
                <p>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <NavLink to="/pricing" className="navlink-no-underline">
        <motion.button 
          className="premium-click"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send a Message
        </motion.button>
      </NavLink>
    </>
  );
};

export default PremiumServices;
