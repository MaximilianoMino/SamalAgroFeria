import React from "react";
import { Link } from "react-router-dom";
import BatchBtn from "../batchBtn/BatchBtn";
import "./batchlist.css";

const BatchList = ({ batch }) => {
  const { name, photo, kg, quality, size } = batch;
  return (
    <div className="batch-list">
      <img className="batch-list-img" src={`${photo}`} />{" "}
      <div className="batch-list-description">
        <ul>
          <li>
            <span className="batch-list-field"> Batch: </span>{" "}
            <span className="batch-list-value"> {name} </span>{" "}
          </li>{" "}
          <li>
            <span className="batch-list-field"> Kg: </span>{" "}
            <span className="batch-list-value"> {kg} </span>{" "}
          </li>{" "}
          <li>
            <span className="batch-list-field"> Quality: </span>{" "}
            <span className="batch-list-value"> {quality} </span>{" "}
          </li>{" "}
          <li>
            <span className="batch-list-field">
              <span className="batch-list-field"> Size: </span>{" "}
            </span>{" "}
            <span className="batch-list-value"> {size} </span>{" "}
          </li>{" "}
        </ul>{" "}
        <div className="batch-btn-container">
          <Link>
            <BatchBtn text="Buy Now" />
          </Link>{" "}
          <Link to={`/batchs/detail/${batch.idFirebase}`}>
            <BatchBtn text="Details" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BatchList;
