import React, { useEffect, useRef } from "react";
import { FaComment, FaUsers, FaBook, FaFlask, FaHeart, FaBullhorn } from "react-icons/fa"; // Import React Icons
import "./ScrollBar.css";

const ScrollBar = () => {
  const sliderRef = useRef(null);

  const scrollTexts = [
    "Shame-free sex conversations",
    "Sex storytelling",
    "Pleasure-positive education",
    "Research on sexuality",
    "Coaching for deeper connection",
    "Amplifying taboo voices",
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (position <= -slider.scrollWidth / 2) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const icons = [
    <FaComment key="comment" />,
    <FaUsers key="users" />,
    <FaBook key="book" />,
    <FaFlask key="flask" />,
    <FaHeart key="heart" />,
    <FaBullhorn key="bullhorn" />,
  ];
  const colors = ["pink", "yellow", "green"];

  // Repeat the whole set twice for looping effect
  const repeatedTexts = [...scrollTexts, ...scrollTexts];

  return (
    <div className="scrollbar-section">
      <div className="scrollbar-wrapper">
        <div className="scrollbar-track">
          <div className="scrollbar-slider" ref={sliderRef}>
            {repeatedTexts.map((text, i) => (
              <div className="scrollbar-slide" key={i}>
                <span className={`scrollbar-icon ${colors[i % 3]}`}>
                  {icons[i % icons.length]}
                </span>
                <span className="scrollbar-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;
