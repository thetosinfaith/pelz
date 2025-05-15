import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "./Quote.css";

const Quote = () => {
  const issues = [
    {
      title: "Your brand feels invisible",
      text: "You have a business or personal brand, but it feels invisible—people aren’t noticing you.",
    },
    {
      title: "Inconsistent and unprofessional branding",
      text: "Your brand looks unprofessional, making you hesitant to put yourself out there.",
    },
    {
      title: "Clients aren’t coming",
      text: "You’re struggling to attract high-value clients because your brand doesn’t communicate the right message.",
    },
    {
      title: "You don’t stand out",
      text: "You lack clarity on how to position your brand for impact, recognition, and credibility.",
    },
    {
      title: "Competitors feel intimidating",
      text: "You feel overwhelmed by competitors who seem to have a stronger presence.",
    },
    {
      title: "Branding still feels off",
      text: "You’ve tried DIY branding or worked with designers before, but your brand still doesn’t feel strategic or aligned.",
    },
  ];

  return (
    <div className="quote-container">
      <div className="quote-content">
        <div className="quote-list">
        <div className="title-container">
  <h1>Is This You?</h1>
</div>

          {issues.map((issue, index) => (
            <div
              key={index}
              className={`quote-box ${index % 2 === 0 ? "black-bg" : "white-bg"}`}
            >
              <FaQuestionCircle
                className={`question-icon ${index % 2 === 0 ? "white-icon" : "black-icon"}`}
              />
              <p className="quote-text">{issue.text}</p>
            </div>
          ))}
        </div>
        <div className="image-box"></div>
      </div>
      <p className="quote-text final-text">
        Most business owners and professionals struggle with these same issues before working with me. I can help you fix this.
      </p>
    </div>
  );
};

export default Quote;
