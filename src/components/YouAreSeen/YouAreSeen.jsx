import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaUserPlus,
  FaQuestionCircle,
  FaCalendarCheck,
  FaHeart,
  FaThumbsUp,
} from "react-icons/fa";
import "./YouAreSeen.css";

const YouAreSeen = () => {
  return (
    <section className="youreseen-container">
      <motion.button
        className="youreseen-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        You Are Seen
      </motion.button>

      <motion.h2
        className="youreseen-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        You're In The Right Place If This Sounds Like You...
      </motion.h2>

      <motion.div
        className="youreseen-cards"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        {[
          {
            num: "01",
            title: "Sex feels awkward",
            text: "You feel shy, awkward, or unsure when it comes to sex — and it’s messing with your confidence. You’re not the only one feeling this way.",
            cta: "GET A FREE 15-MIN CALL",
            icon: <FaPhoneAlt />,
          },
          {
            num: "02",
            title: "Your brand feels off",
            text: "You want your brand to reflect your voice around sex, self-expression, wellness, or identity, but it just doesn’t hit",
            cta: "BRING ME ON BOARD",
            icon: <FaUserPlus />,
          },
          {
            num: "03",
            title: "You're curious",
            text: "There’s a lot of confusing info out there. You just want real answers and a safe place to learn more about pleasure",
            cta: "GET REAL ANSWERS NOW",
            icon: <FaQuestionCircle />,
          },
          {
            num: "04",
            title: "You love the facts",
            text: "You're into the science of sex, you’re curious about the “why” behind sex — like behavior, science, and how society plays a role.",
            cta: "SCHEDULE A CHAT",
            icon: <FaCalendarCheck />,
          },
          {
            num: "05",
            title: "You want better sex",
            text: "You crave deeper connection. Things might feel off with your partner, or maybe you just want more connection and intimacy.",
            cta: "BOOK A COACHING SESSION",
            icon: <FaHeart />,
          },
          {
            num: "06",
            title: "You want to be seen",
            text: "Your bold ideas need a brand, You’ve got bold ideas about sex or identity — but your brand isn’t showing it.",
            cta: "LET'S MAKE IT HAPPEN",
            icon: <FaThumbsUp />,
          },
        ].map(({ num, title, text, cta, icon }, i) => (
          <motion.div
            className="youreseen-card"
            key={num}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 + i * 0.1 }}
          >
            <span className="youreseen-card-number">{num}</span>
            <p className="youreseen-card-text">{text}</p>
            <motion.button className="suggested-service-button">
              {icon} {cta}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default YouAreSeen;
