import React from "react";
import Button from "./Button";
import "../assets/css/SpeakerCard.css";

const SpeakerCard = ({
  headercolor,
  image,
  name,
  ratingImage,
  title,
  paragraph,
  buttontext,
}) => {
  const style = {
    backgroundColor: headercolor,
  };
  return (
    <div className="speaker-card">
      <div className="speaker-header border-bottom" style={style}></div>
      <div className="speaker-footer">
        <div className="translate">
          <div className="speaker-image-box">
            <img src={image} alt={name} className="speaker-image" />
          </div>

          <div className="speaker-intro">
            <div className="speaker-name-box">
              <p className="speaker-name">{name}</p>
              <p className="speaker-title">{title}</p>
            </div>
            <div className="speaker-rating-box">
              <img src={ratingImage} alt="Rating" className="speaker-rating" />
            </div>
          </div>

          <div className="speaker-text">
            <p className="speaker-paragraph">{paragraph}</p>
            <Button text={buttontext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
