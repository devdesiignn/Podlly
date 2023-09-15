import React from "react";
import "../assets/css/WhoCard.css";

const WhoCard = ({ icon, sometext, arrow, heading, paragraph }) => {
  return (
    <div className="card">
      <div className="card-line-1">
        <div className="card-icon-box">
          <img src={icon} className="card-icon" />
        </div>
        <div className="card-arrow-box">
          <span className="sometext">{sometext}</span>
          <img src={arrow} className="card-arrow" />
        </div>
      </div>
      <div className="card-line-2">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default WhoCard;
