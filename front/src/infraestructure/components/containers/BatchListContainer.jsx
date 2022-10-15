import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BatchList from "../pure/batch/batchList/BatchList";
import ProductService from "../../../domain/services/productsHome.js";
import BatchHeader from "../pure/batch/batchHeader/BatchHeader";
import BatchLink from "../pure/batch/backLink/BatchLink";
import Spinner from "../pure/spinner/Spinner";
const productService = new ProductService();
const BatchListContainer = () => {
  const [batchs, setBatchs] = useState();

  const { id } = useParams();
  const getData = async () => {
    try {
      const productRetrieved = await productService.getProductsFromCat(id);
      return setBatchs(productRetrieved);
    } catch (error) {
      return error.message;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="batch-container">
      <BatchHeader text="Batch Catalog" />
      <Link to="/">
        <BatchLink text="HOME/BATCHCATALOG" />
      </Link>
      {batchs ? (
        batchs.map((batch) => {
          return <BatchList key={batch.idFirebase} batch={batch} />;
        })
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default BatchListContainer;
