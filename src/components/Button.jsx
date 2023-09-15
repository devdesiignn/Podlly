import React from "react";
import "../assets/css/Button.css";

const Button = ({ text, type }) => {
  return (
    <a href="#" className={`button ${type}`}>
      {text}
    </a>
  );
};

export default Button;
