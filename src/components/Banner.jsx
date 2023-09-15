import React from "react";
import "../assets/css/Banner.css";
import bannerImage from "../assets/img/speakers/speaker-8.svg";
import musicWaves from "../assets/img/icons/music-waves.svg";
import linkOut from "../assets/img/icons/link-out-white.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="wrap">
        <div className="banner-image-box">
          <img src={bannerImage} alt="Banner Image" className="banner-image" />
        </div>
        <div className="banner-main">
          <div className="banner-text-box">
            <p className="banner-title">Podcast on Demand by Adekola Ibrahim</p>
            <h3 className="banner-heading">
              How to scale your portfolio without using paid Ads
            </h3>
            <img
              src={musicWaves}
              alt="Music Wave"
              className="banner-music-icon"
            />
          </div>
        </div>
      </div>

      <div className="banner-aside">
        <p className="banner-aside-heading">150+</p>
        <p className="banner-aside-paragraph">Podcasters connected with us</p>
        <a href="#" className="banner-aside-link">
          View all <img src={linkOut} className="banner-aside-link-icon" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
