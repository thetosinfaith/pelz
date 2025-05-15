import { FaUsers, FaRainbow, FaGenderless } from "react-icons/fa";
import "./TargetAudience.css";

const TargetAudience = () => {
  return (
    <div className="target-audience">
      <h2 className="audience-title">WHO I WORK WITH</h2>
      <div className="audience-item">
        <FaUsers className="audience-icon" />
        <span className="audience-description">Individuals</span>
      </div>
      <div className="audience-item">
        <FaUsers className="audience-icon" />
        <span className="audience-description">Couples</span>
      </div>
      <div className="audience-item">
        <FaRainbow className="audience-icon" />
        <span className="audience-description">All Sexual Orientations</span>
      </div>
      <div className="audience-item">
        <FaGenderless className="audience-icon" />
        <span className="audience-description">All Gender Identities</span>
      </div>
    </div>
  );
};

export default TargetAudience;
