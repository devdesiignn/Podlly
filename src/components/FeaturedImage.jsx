import React from "react";
import "../assets/css/FeaturedImage.css";

const FeaturedImage = ({ image, alt }) => {
  return (
    <div className="featured-image-box">
      <img src={image} alt={alt} className="featured-image" />
    </div>
  );
};

export default FeaturedImage;
