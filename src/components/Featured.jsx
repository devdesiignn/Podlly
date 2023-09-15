import React from "react";
import "../assets/css/Featured.css";
import FeaturedImage from "./FeaturedImage";
import airbnb from "../assets/img/logos/airbnb.svg";
import dropbox from "../assets/img/logos/dropbox.svg";
import framer from "../assets/img/logos/framer.svg";
import google from "../assets/img/logos/google.svg";
import uber from "../assets/img/logos/uber.svg";

const Featured = () => {
  return (
    <section className="section-featured border-bottom">
      <div className="featured-image-container grid grid--5-cols">
        <FeaturedImage image={airbnb} alt="Airbnb" />
        <FeaturedImage image={uber} alt="Uber" />
        <FeaturedImage image={google} alt="Google" />
        <FeaturedImage image={framer} alt="Framer" />
        <FeaturedImage image={dropbox} alt="Dropbox" />
      </div>
    </section>
  );
};

export default Featured;
