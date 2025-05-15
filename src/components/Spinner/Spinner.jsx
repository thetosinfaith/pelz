import React from "react";
import logo from "../../assets/logo.png";

import "./Spinner.css";

const Spinner = () => {
  return (
   <div className="spinner-container">
     <div className="loading-spinner">
      <img src={logo} alt="Loading..." className="zoom-in-out" />
    </div> 
   </div>
  );
};

export default Spinner;