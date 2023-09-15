import React from "react";
import "../assets/css/Hero.css";
import Heading from "./Heading";
import TextBtn from "./TextBtn";
import ImageCard from "./ImageCard";

import speaker1 from "../assets/img/speakers/speaker-1.svg";
import speaker2 from "../assets/img/speakers/speaker-2.svg";
import speaker3 from "../assets/img/speakers/speaker-3.svg";
import speaker4 from "../assets/img/speakers/speaker-4.svg";

const Hero = () => {
  return (
    <section className="section-hero border-bottom">
      <div className="text-container">
        <Heading
          text="Discover Your Next Podcast Guest and Unlock Engaging Conversations"
          fontSize="5rem"
          lineHeight="6.4rem "
        />

        <TextBtn
          text="Podcasting's challenge is connecting with diverse global voices due to geographical and cultural barriers, that is why we are here"
          fontSize="2.4rem"
          buttonText="Find the right speaker"
        />
      </div>

      <div className="image-container grid">
        <ImageCard
          name="Adekola Ibrahim"
          title="Product Designer"
          image={speaker1}
          alt="Speaker 1"
        />
        <ImageCard
          name="Okon Jeremiah"
          title="Software Engineer"
          image={speaker2}
          alt="Speaker 2"
        />
        <ImageCard
          name="Lawal Wahab"
          title="Graphic Designer"
          image={speaker3}
          alt="Speaker 3"
        />
        <ImageCard
          name="Adaeze Williams"
          title="Brand Marketer"
          image={speaker4}
          alt="Speaker 4"
        />
      </div>
    </section>
  );
};

export default Hero;
