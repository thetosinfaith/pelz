import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/ServicesHeader/ServicesHeader";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import CoachingSection from "../../components/CoachingSection/CoachingSection";
import SexualityEducation from "../../components/SexualityEducation/SexualityEducation";
import Features from "../../components/TargetAudience/TargetAudience";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <Services />
      <Features/>
      <ServicesSection />
      <CoachingSection />
      <SexualityEducation />
      <Footer />
    </>
  );
};

export default AboutUs;
