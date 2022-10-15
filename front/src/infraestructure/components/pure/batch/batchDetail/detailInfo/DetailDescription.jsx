import React from "react";
import "./detailInfo.css";
import harvestIcon from "../../../../../../assets/icons/cosecha.png";
import kgIcon from "../../../../../../assets/icons/balanza.png";
import tape from "../../../../../../assets/icons/tape.png";

const DetailInfo = ({ batchs }) => {
  const { kg, harvest } = batchs;
  return (
    <>
      <div className="detail-info">
        <img
          className="detail-info-img"
          alt="samal agro kg icon"
          srcSet={tape}
        />
        <div className="dt-descr-container">
          <span> CALIBER </span> <p>CALIBER </p>{" "}
        </div>
      </div>
      <div className="detail-info">
        <img
          className="detail-info-img"
          alt="samal agro harvest icon"
          srcSet={harvestIcon}
        />
        <div className="dt-descr-container">
          <span>HARVEST</span> <p>{harvest} </p>
        </div>
      </div>
      <div className="detail-info">
        <img
          className="detail-info-img"
          alt="samal agro kg icon"
          srcSet={kgIcon}
        />
        <div className="dt-descr-container">
          <span>KG</span> <p>{kg} </p>{" "}
        </div>
      </div>
    </>
  );
};

export default DetailInfo;
