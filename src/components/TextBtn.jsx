import React from "react";
import Button from "./Button";
import "../assets/css/TextBtn.css";

const TextBtn = ({ text, fontSize, buttonText }) => {
  const style = {
    fontSize: fontSize,
  };
  return (
    <div>
      <div className="textbtn-container">
        <p className="text" style={style}>
          {text}
        </p>
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default TextBtn;
