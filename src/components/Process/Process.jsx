import React from 'react';
import './Process.css';
import PartnerSection from '../PartnerSection/PartnerSection';

const Process = () => {
  const processSteps = [
    {
      processNumber: '01',
      processTitle: 'Consultation',
      processDescription: 'We discuss your energy needs and suggest the best solar and inverter solutions tailored to you.'
    },
    {
      processNumber: '02',
      processTitle: 'Electrical Survey',
      processDescription: 'Our team assesses your property to ensure optimal placement and compatibility of the system.'
    },
    {
      processNumber: '03',
      processTitle: 'Installation',
      processDescription: 'We handle the setup of your solar & inverter system with expert precision for maximum efficiency.'
    },
    {
      processNumber: '04',
      processTitle: 'Monitoring',
      processDescription: 'We monitor your system remotely, ensuring peak performance and energy savings every day.'
    }
  ];

  return (
    <div className="process-solar-process-container">
      <div className="process-hero-image">
        <div className="process-card">
          <div className="process-header">
            <p className="process-steps-label">STEPS TO FOLLOW</p>
            <h2 className="process-title">Our Simple 4-Step Solar & Inverter Process.</h2>
          </div>
          
          <div className="process-steps">
            {processSteps.map((processStep, processIndex) => (
              <div className="process-step" key={processIndex}>
                <div className="process-step-number">{processStep.processNumber}</div>
                <div className="process-step-title">{processStep.processTitle}</div>
                <div className="process-step-description">{processStep.processDescription}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Process;
