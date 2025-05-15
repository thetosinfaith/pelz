import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Brands from "../../components/Brands/Brands";
import PodcastPage from "../../components/PodcastPage/PodcastPage";
import BrandingSection from "../../components/YouAreSeen/YouAreSeen";
import About_Pelumi from "../../components/About_Pelumi/About_Pelumi";
import ContactUs from "../../pages/ContactUs/ContactUs";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import HeyGirlSection from "../../components/HeyGirlSection/HeyGirlSection";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="bg-wrapper">
        <Hero />
        <InnerBanner />
        <div className="st">
          <BrandingSection />
          <About_Pelumi />
        </div>
        <HeyGirlSection />
      </div>

      <div className="user"></div>

      <Brands />
      <PodcastPage />

      <div className="auto-run">
        <ContactUs />
      </div>

      <Outlet />
      <div className="txt"></div>
      <Footer />
    </>
  );
};

export default Homepage;
