import React from "react";
import {
  FaWpforms,
  FaPhoneAlt,
  FaMoneyCheckAlt,
  FaPencilRuler,
  FaCommentDots,
  FaFileDownload,
} from "react-icons/fa";
import "./ServicesHeader.css";

const Services = () => {
  const services = [
    {
      icon: FaWpforms,
      step: 1,
      title: "Enquiry Form",
      description:
        "You start by filling out a form where you share details about your brand, what it’s about, what you need help with. This helps me understand your brand identity requirements.",
    },
    {
      icon: FaPhoneAlt,
      step: 2,
      title: "Call (90 Mins)",
      description:
        "We’ll have a video or phone call to go over your brand in depth. We’ll discuss your mission, messaging, goals, and how you want people to perceive your brand.",
    },
    {
      icon: FaMoneyCheckAlt,
      step: 3,
      title: "Pay & Proceed",
      description:
        "If we both feel we’re a good fit, you’ll make the payment to officially kick things off. Right after that, I’ll send you a branding questionnaire to gather deeper insights.",
    },
    {
      icon: FaPencilRuler,
      step: 4,
      title: "Brand Design",
      description:
        "Based on everything you’ve shared, I’ll start creating your brand’s look like your logo, colors, and fonts. If you already have a brand, I’ll improve it to make it even better.",
    },
    {
      icon: FaCommentDots,
      step: 5,
      title: "Your Feedbacks",
      description:
        "Once I’ve created the branding concepts, I’ll send them for review. You can share feedback, and I’ll make changes until you're happy with the final result.",
    },
    {
      icon: FaFileDownload,
      step: 6,
      title: "Get Brand Kit",
      description:
        "Once everything is approved, I’ll package up all your branding assets and deliver them to you. These files will be in high-quality formats, ready for you to use everywhere.",
    },
  ];

  return (
    <div className="service-wrapper">
      <div className="service-header">
        <h1>Let's Work Together</h1>
        <h4 className="steps-title">
          Do you want to feel comfortable with sex, and find the right person?
          Here are the services I offer to help you.
        </h4>
      </div>
    </div>
  );
};

export default Services;
