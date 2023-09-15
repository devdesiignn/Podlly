import React from "react";
import "../assets/css/Heading.css";

const Heading = ({ text, fontSize, lineHeight }) => {
  const style = {
    fontSize: fontSize,
    lineHeight: lineHeight,
  };
  return (
    <div className="heading-primary-container">
      <h1 className="heading-primary" style={style}>
        {text}
      </h1>
    </div>
  );
};

export default Heading;
