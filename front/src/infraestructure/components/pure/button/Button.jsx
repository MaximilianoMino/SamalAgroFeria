import React from "react";
import "./button.css";

const Button = ({ text, btnStyle }) => {
  return (
    <p className="btn" style={btnStyle}>
      {text}
    </p>
  );
};

export default Button;
