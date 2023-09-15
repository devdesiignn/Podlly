import React from "react";
import "../assets/css/Speaker.css";
import Heading from "./Heading";
import SpeakerCard from "./SpeakerCard";
import speaker1 from "../assets/img/speakers/speaker-5.svg";
import speaker2 from "../assets/img/speakers/speaker-6.svg";
import speaker3 from "../assets/img/speakers/speaker-7.svg";
import rating from "../assets/img/icons/rating-stars.svg";
import Accordion from "./Accordion";

const Speaker = () => {
  return (
    <section className="section-speaker">
      <div className="speaker-t-container">
        <div className="speaker-t-container-top">
          <Heading text="Speaker?" fontSize="3rem" lineHeight="3rem" />
          <Heading
            text="Meet our to speakers to grace your podcast "
            fontSize="5rem"
            lineHeight="6rem"
          />
        </div>
      </div>
      <div className="speaker-i-container">
        <SpeakerCard
          headercolor="var(--magenta)"
          image={speaker1}
          name="Lawal Wahab"
          title="Product Designer"
          paragraph="Wahab is a passionate product designer from Nigeria, loves to talk about design and career in design"
          buttontext="View profile"
          ratingImage={rating}
        />
        <SpeakerCard
          headercolor="var(--yellow)"
          image={speaker2}
          name="Sun Yi"
          title="Brand Strategist"
          paragraph="Sun Yi is a brand strategist from Korea, over the years, he has worked with industries and personal brands"
          buttontext="View profile"
          ratingImage={rating}
        />
        <SpeakerCard
          headercolor="var(--magenta)"
          image={speaker3}
          name="Muiz Haruna"
          title="Software Engineer"
          paragraph="Muiz is a passionate software engineer from Nigeria, he has worked at FANNG and ready to share his experience "
          buttontext="View profile"
          ratingImage={rating}
        />
      </div>

      <Accordion />
    </section>
  );
};

export default Speaker;
