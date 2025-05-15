import "./PartnerSection.css"
import { FaClipboardCheck, FaBullseye, FaPalette, FaHandsHelping, FaComments, FaRedo } from "react-icons/fa"

const PartnerSection = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaClipboardCheck />, // Represents a check-up or evaluation
      title: "Brand Check-Up & Consultation",
      description:
        "I’ll take a close look at your brand to see what’s working, what’s not, and how we can make it stronger. It's a health check for your business.",
      bgColor: "light-blue",
    },
    {
      id: 2,
      icon: <FaBullseye />, // Symbolizes targeting and positioning
      title: "Brand Strategy & Positioning",
      description:
        "What makes your brand special? I’ll help you figure that out and also show you how to communicate it in a way that grabs attention.",
      bgColor: "light-beige",
    },
    {
      id: 3,
      icon: <FaPalette />, // Represents creativity and design
      title: "Tailored Brand Identity Design",
      description:
        "More than just a pretty logo! I’ll design a look that truly represents your brand, speaks to the right people, and builds trust from the get-go.",
      bgColor: "light-pink",
    },
    {
      id: 4,
      icon: <FaHandsHelping />, // Symbolizes guidance and support
      title: "Step-by-Step Support",
      description:
        "I won’t just hand you a logo and call it a day. I’ll guide you through the process, making sure your brand is set up for long-term success.",
      bgColor: "light-yellow",
    },
    {
      id: 5,
      icon: <FaComments />, // Represents communication and messaging
      title: "Clear Messaging & Brand Voice",
      description:
        "Struggling to explain what you do? I’ll help you craft a message that makes it crystal clear why your brand matters.",
      bgColor: "light-purple",
    },
    {
      id: 6,
      icon: <FaRedo />, // Represents rebranding and renewal
      title: "Rebranding & Growth Strategy",
      description:
        "If your brand has outgrown its old look or message, I’ll help you refresh, reposition, and relaunch with confidence!",
      bgColor: "light-green",
    },
  ]


  return (
    <div className="partner-section">
         <div className="service-intro">
        <h2>
        Here's How I Can&nbsp;<span>Help</span>
        </h2>
        <p>
    I will help you take frustration and uncertainty out of the mix and craft a brand identity that works
        </p>
      </div>
      

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className={`benefit-card ${benefit.bgColor}`}>
            <div className="icon-container">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerSection

