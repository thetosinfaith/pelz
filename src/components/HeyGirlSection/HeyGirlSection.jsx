import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import About from '../../assets/babe.jpeg';
import Tall from '../../assets/tall.png';
import Pelz from '../../assets/pelz.png';
import Big from '../../assets/big.png';
import FM from '../../assets/vb.jpeg';



import './HeyGirlSection.css';

const HeyGirlSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const slides = [
    {
      image: About,
      text: "I go the extra mile to ensure you have everything you need to explore pleasure with compassion, care, and clarity"
    },
    {
      image: Pelz, // Remove extra query params
      text: "I have social voice and presence that can't be replicated! No one does it like I do, and that’s the magic."
    },
    {
      image: Big,
      text: "I share in your energy & excitement as if it were my own brand, making the experience a joy from start to finish."
    },
    {
      image: FM,
      text: "I have a sky-high standard across all project deliverables, from curriculum design, to strategic consulting."
    },
    {
      image: Tall,
      text: "I have an feminist lens that you won't see anywhere else, it's shaped by my experiences, and it can't be duplicated!"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setSlidesToShow(4);
      else if (window.innerWidth >= 992) setSlidesToShow(3);
      else if (window.innerWidth >= 768) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(slides[(currentIndex + i) % slides.length]);
    }
    return visible;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <>
    <section className="hey-section">
      <div className="hey-container">
        <div className="hey-header">
          <h2>what's so different about working with <span className="hey-brand-name">COACH OAK™</span></h2>
        </div>

        <div className="hey-carousel-container">
          <div className="hey-carousel" style={{ display: 'flex', gap: '1rem' }}>
            {visibleSlides.map((slide, index) => (
              <div className="hey-slide" key={index}>
                <div className="hey-slide-content">
                  {slide.reel ? (
                    <iframe
                      className="hey-slide-video"
                      src={slide.reel}
                      frameBorder="0"
                      allowFullScreen
                      title={`Reel ${index}`}
                      style={{ width: '100%', height: '350px', borderRadius: '10px', border: 'none', overflow: 'hidden' }}
                    />
                  ) : (
                    <img
                      src={slide.image}
                      alt={`Slide ${index}`}
                      className="hey-slide-image"
                    />
                  )}
                  <div className="hey-slide-text-overlay">
                    <p>{slide.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hey-navigation">
          <button className="hey-nav-button" onClick={prevSlide}>←</button>
          <button className="hey-nav-button" onClick={nextSlide}>→</button>
        </div>

        <div className="hey-cta-container">
          <NavLink to='/services'>
          <button className="hey-cta-button">ENQUIRE WITH ME</button>
          </NavLink>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeyGirlSection;
