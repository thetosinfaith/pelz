import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Work from "../../assets/ssp.png";
import Bed from "../../assets/blg.jpg";
import Office from "../../assets/spk.jpg";

import "./ClientBox.css";

const ClientBox = () => {
  const services = [
    {
      image: Bed,
      title: "Work With Me",
      description:
        "Branding goes beyond just a logo. I help businesses & professionals create an identity that stands out, earns trust, and positions them for success. Ready to take your brand to the next level?",
      cta: "Enquire Now",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe_epGO6NtrtXqLwHbMVRJQsJnC47rNjBVWhrbnNqTegsVNEQ/viewform?usp=send_form",
    },
    {
      image: Work,
      title: "Read My Blog",
      description:
        "I share insights on branding, freelancing, personal positioning, and business growth. If you want strategies, tricks, and tips that help you build a brand people remember, start reading here.",
      cta: "Explore More",
      link: "/blog", 
    },
    {
      image: Office,
      title: "Speaking Events",
      description:
        "I enjoy talking about branding, LinkedIn growth, freelancing, and personal brand positioning... basically, everything that helps businesses and professionals stand out and thrive.",
      cta: "Book Me to Speak",
      link: "/speaking", 
    },
  ];

  const colors1 = ["#F7F7F7", "yellow", "#F7F7F7"];
  const colors2 = ["#FEFF99", "#F7F7F7", "#FFFF00"];

  return (
    <div className="svc-wrapper">
      <div className="svc-our-services">
        {services.map(({ image, title, description, cta, link }, index) => (
          <motion.div
            className="svc-item"
            key={index}
            style={{
              backgroundColor: (Math.floor(index / 3) % 2 === 0 ? colors1 : colors2)[index % 3],
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={image} alt={title} className="svc-image" />
            <div className="svc-icon-title">
              <span className="svc-title-text">
                <h3>{title}</h3>
              </span>
            </div>
            <p>{description}</p>
            {link.startsWith("http") ? (
              <a href={link} className="svc-btn" target="_blank" rel="noopener noreferrer">
                {cta}
              </a>
            ) : (
              <Link to={link} className="svc-btn">
                {cta}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientBox;
