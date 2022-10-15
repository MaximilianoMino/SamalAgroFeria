import React from "react";
import "./batchDetail.css";
import ImageZoom from "react-image-zooom";
import DetailDropdown from "./detailDropdown/DetailDropdown.jsx";
const BatchDetail = ({ batchs }) => {
  const { name, photo } = batchs;
  return (
    <div className="batch-detail">
      <h2 className="batch-detail-title"> {name} </h2>{" "}
      <ImageZoom
        className="batch-detail-img"
        alt="Samal agro batch photo"
        height="100%"
        src={photo}
        zoom="200"
      />
      <DetailDropdown batchs={batchs} />{" "}
    </div>
  );
};

export default BatchDetail;
