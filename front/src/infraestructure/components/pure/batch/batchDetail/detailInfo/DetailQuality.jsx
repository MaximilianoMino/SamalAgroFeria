import React from "react";
import "./detailInfo.css";
import stained from "../../../../../../assets/icons/soil.png";
import purity from "../../../../../../assets/icons/water-drop.png";
import damages from "../../../../../../assets/icons/damaged-package.png";
import slightlyStained from "../../../../../../assets/icons/spot.png";
import sortexQ from "../../../../../../assets/icons/shield.png";

const DetailQuality = ({ batchs }) => {
  const { kg, harvest } = batchs;

  return (
    <>
      <div className="detail-info">
        <img
          className="detail-info-img"
          alt="samal agro kg icon"
          srcSet={damages}
        />{" "}
        <div className="dt-descr-container">
          <span> DAMAGES </span> <p>1% </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="detail-info">
        <img
          className="detail-info-img"
          alt="samal agro harvest icon"
          srcSet={stained}
        />{" "}
        <div className="dt-descr-container">
          <span> STAINED </span> <p>1%</p>
        </div>{" "}
      </div>{" "}
      <div className="detail-info">
        <img
          className="detail-info-img"
          alt="samal agro kg icon"
          srcSet={slightlyStained}
        />{" "}
        <div className="dt-descr-container">
          <span> SLIGHTLY STAINED</span> <p>3% </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="detail-info">
        <img
          className="detail-info-img"
          alt="samal agro kg icon"
          srcSet={purity}
        />{" "}
        <div className="dt-descr-container">
          <span> PURITY </span> <p>99.9% </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="detail-info">
        <img
          className="detail-info-img"
          alt="samal agro kg icon"
          srcSet={sortexQ}
        />{" "}
        <div className="dt-descr-container">
          <span> SORTEX QUALITY </span> <p>12 </p>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default DetailQuality;
