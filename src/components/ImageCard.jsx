import React from "react";
import "../assets/css/ImageCard.css";

const ImageCard = ({ name, title, image, alt }) => {
  return (
    <div className="image-card-box">
      <div className="image-card-details">
        <p className="image-card-name">{name}</p>
        <p className="image-card-title">{title}</p>
      </div>
      <img src={image} alt={alt} className="image-card-img" />
    </div>
  );
};

export default ImageCard;
