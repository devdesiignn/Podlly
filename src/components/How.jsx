import React from "react";
import "../assets/css/How.css";
import Heading from "./Heading";
import WhoCard from "./WhoCard";
import icon1 from "../assets/img/icons/create-your-profile.svg";
import icon2 from "../assets/img/icons/right-arrow.svg";
import icon3 from "../assets/img/icons/search.svg";
import icon4 from "../assets/img/icons/link-out-arrow.svg";
import icon5 from "../assets/img/icons/collaborate.svg";

const How = () => {
  return (
    <section className="section-how border-bottom">
      <div className="how-t-container">
        <div className="how-t-container-top">
          <Heading text="How it works?" fontSize="3rem" lineHeight="3rem" />
          <Heading
            text="The process is easy as pie. "
            fontSize="5rem"
            lineHeight="6rem"
          />
        </div>
      </div>

      <div className="how-i-container">
        <WhoCard
          icon={icon1}
          sometext="Learn More"
          arrow={icon2}
          heading="Create Your Profile"
          paragraph="Start by creating a profile and telling us about your show and target audience. This helps us match you with the right guests."
        />
        <WhoCard
          icon={icon3}
          sometext=""
          arrow={icon4}
          heading="Browse Our Speaker Catalog"
          paragraph="Explore a diverse catalog of speakers from various industries, and expertise. Filter and search to find the ideal fit for your podcast."
        />
        <WhoCard
          icon={icon5}
          sometext=""
          arrow={icon4}
          heading="Connect and Collaborate"
          paragraph="Reach out to potential guests directly through our platform. Arrange interviews, share ideas, and collaborate seamlessly."
        />
      </div>
    </section>
  );
};

export default How;
