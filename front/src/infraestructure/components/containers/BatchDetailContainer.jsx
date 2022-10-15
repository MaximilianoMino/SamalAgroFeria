import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductService from "../../../domain/services/productsHome.js";
import BatchLink from "../pure/batch/backLink/BatchLink.jsx";
import BatchDetail from "../pure/batch/batchDetail/BatchDetail.jsx";
import BatchHeader from "../pure/batch/batchHeader/BatchHeader.jsx";
import Spinner from "../pure/spinner/Spinner.jsx";
const productService = new ProductService();

const BatchDetailContainer = () => {
  const [batchs, setBatchs] = useState();

  const { id } = useParams();
  const getData = async () => {
    try {
      const productRetrieved = await productService.getProductsById(id);
      return setBatchs(productRetrieved);
    } catch (error) {
      return error.message;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="batch-detail-container">
      <BatchHeader text="BATCH DETAIL" />
      <Link to="/">
        <BatchLink text="HOME/DETAIL" />
      </Link>
      {batchs ? <BatchDetail batchs={batchs} /> : <Spinner />}
    </section>
  );
};

export default BatchDetailContainer;
