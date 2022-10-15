import React from "react";
import "./batchHeader.css";
import Logo from "../../logo/Logo";
const BatchHeader = ({ text }) => {
  return (
    <div className="batch-list-header">
      <Logo />
      <p className="batch-header-text">{text}</p>
    </div>
  );
};

export default BatchHeader;
