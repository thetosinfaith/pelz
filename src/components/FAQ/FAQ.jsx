import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'How long does it take to complete a brand identity project?',
      answer: 'The timeline varies depending on the project scope, but a complete brand identity typically takes 2 to 6 weeks, including consultation, design, feedback, and revisions.'
    },
    {
      question: 'What makes your branding process different?',
      answer: 'Unlike designers who focus only on visuals, I take a strategic approach ensuring that your brand identity aligns with your business goals, target audience, and positioning.'
    },
    {
      question: 'How much does branding cost?',
      answer: 'Well, pricing depends on the services included (logo design, brand strategy, social media templates, etc.). Contact me for a custom quote based on your brand’s needs.'
    },
    {
      question: 'What do I need before we start?',
      answer: 'To get started, I’ll need details about your business, target audience, and goals. You’ll fill out a brand discovery questionnaire before our consultation call.'
    },
    {
      question: 'What will I receive after the project is completed?',
      answer: 'You’ll receive a Brand Kit, including: ✅ Logo files (JPEG, PNG, SVG, PDF) ✅ Color palette & typography guide ✅ Brand style guide ✅ Social media assets (if included)'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'I accept payments via bank transfer, PayPal, Stripe, and credit/debit cards.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
        <div className="testimonials-content">
          <div className="testimonials-left">
            <h1>
              <span>Frequently Asked Questions</span>
            </h1>

            <p>
            Can't find the answer you're looking for? 
            </p>
          
            <button className="cta-button">Send me a Message</button>
          </div>
          </div>

      
      <div className="faq-right">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? '-' : '+'}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">+</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;