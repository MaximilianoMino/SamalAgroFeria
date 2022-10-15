import React from "react";
import rightArrow from "../../../../../assets/icons/right-arrow.png";
import "./batchlink.css";
const BatchLink = ({ text }) => {
  return (
    <div className="batch-list-container">
      <img
        alt="Samal agro go right arrow icon"
        className="batch-list-ra-icon"
        srcSet={rightArrow}
      />
      <p className="batch-link-text">{text}</p>
    </div>
  );
};

export default BatchLink;
