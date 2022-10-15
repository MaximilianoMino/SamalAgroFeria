import { useEffect, useState } from "react";

import ProductList from "../pure/product/ProductList.jsx";
import ProductService from "../../../domain/services/productsHome.js";
import Spinner from "../pure/spinner/Spinner.jsx";
const productService = new ProductService();
const ProductListContainer = () => {
  const [products, setProducts] = useState();

  const getData = async () => {
    try {
      const productRetrieved = await productService.getProducts();
      return setProducts(productRetrieved);
    } catch (error) {
      return error.message;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="product-list-container ">
      {products ? (
        products.map((product) => (
          <ProductList key={product.idFirebase} product={product} />
        ))
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default ProductListContainer;
