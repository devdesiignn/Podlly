import React from "react";
import "../assets/css/Who.css";

import Heading from "./Heading";
import TextBtn from "./TextBtn";
import ImageCard from "./ImageCard";
import WhoImage from "../assets/img/who-we-are.svg";

export const Who = () => {
  return (
    <section className="section-who border-bottom">
      <div className="t-container">
        <div className="t-container-top">
          <Heading text="Who we are?" fontSize="3rem" lineHeight="3rem" />
          <Heading
            text="We link you to the speaker to make your podcast scale. "
            fontSize="4.5rem"
            lineHeight="5.6rem"
          />
        </div>
        <TextBtn
          text="According to statistics 80% of podcast succeeded not only
          because of promotion  but because of speaker invited to the 
          event and most audience get retained because of speakers"
          fontSize="2rem"
          buttonText="Care to know our Why?"
        />
      </div>

      <div className="i-container">
        <ImageCard image={WhoImage} alt="Two Podcasters" />
      </div>
    </section>
  );
};

export default Who;
