import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/tsws.png";
import "./PodcastPage.css";

const PodcastPage = () => {
  return (
    <div className="podcast-page">
      <div className="podcast-hero">
        <div className="podcast-hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Talk Sex With Sugar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sex, pleasure, orgasms, desires, money, career, breakfast,
            childbirth, relationships, and more! Don't miss new episodes
         
          </motion.p>
          <motion.button
            className="podcast-subscribe-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Listen On Spotify
          </motion.button>
        </div>
       
      </div>

      <div className="podcast-player">
        <h2></h2>
        <iframe
          src="https://open.spotify.com/embed/show/3ptAitA4emRFRMZsTUmmpT"
          width="100%"
          height="232"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PodcastPage;
