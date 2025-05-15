import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProjectCountdown.css";
import Confetti from "react-confetti";

const ProjectCountdown = () => {
  const [brands, setBrands] = useState(0);
  const [countries, setCountries] = useState(0);
  const [profiles, setProfiles] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const animateNumber = (setState, finalValue, duration, callback) => {
      let startTime;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setState(Math.floor(progress * finalValue));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else if (callback) {
          callback();
        }
      };

      requestAnimationFrame(step);
    };

    animateNumber(setBrands, 90, 2000);
    animateNumber(setCountries, 11, 2500);
    animateNumber(setProfiles, 30, 2200, () => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000); // Stop confetti after 4s
    });
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={700} 
          gravity={0.15}
          recycle={false}
          wind={0.02}
          colors={["#ff0", "#f00", "#0f0", "#00f", "#ff69b4", "#ff4500"]}
        />
      )}

      <motion.div 
        className="countdown-container"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 4.5, ease: "easeInOut" }} 
        whileHover={{ scale: 1.02 }}
      >
        <div className="countdown-items">
          <motion.div className="countdown" whileHover={{ scale: 1.1 }}>
            <p className="count-number">{brands}+</p>
            <p className="count-text">Brands Transformed</p>
          </motion.div>

          <div className="divider"></div>

          <motion.div className="countdown" whileHover={{ scale: 1.1 }}>
            <p className="count-number">{countries}+</p>
            <p className="count-text">Clients Across Countries</p>
          </motion.div>

          <div className="divider"></div>

          <motion.div className="countdown" whileHover={{ scale: 1.1 }}>
            <p className="count-number">{profiles}+</p>
            <p className="count-text">LinkedIn Profiles Elevated</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCountdown;
