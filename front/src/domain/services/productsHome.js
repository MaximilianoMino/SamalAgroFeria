import { db } from "../db/firebase";

export default class {
  async getProducts() {
    try {
      let collection;
      let size;
      let response;
      let productsRetrieved;

      collection = db.collection("products");
      size = (await collection.get()).size;

      if (size === 0) response = `No hay registros`;

      productsRetrieved = (await collection.get()).docs.map((doc) => ({
        ...doc.data(),
        idFirebase: doc.id,
      }));

      response = productsRetrieved;
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async getProductsById(id) {
    try {
      let productRetrieved;
      let size;
      let response;

      productRetrieved = db.collection("batchs").doc(id);
      size = (await productRetrieved.get()).size;
      if (size === 0) response = `No existen productos con el id ${id}`;
      else productRetrieved = (await productRetrieved.get()).data();

      response = productRetrieved;
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async getProductsFromCat(batchId) {
    try {
      let response;
      let query;
      let collection;
      let size;
      let productsRetrieved;
      collection = db.collection("batchs");
      if (batchId) query = collection.where("product_id", "==", `${batchId}`);

      size = (await query.get()).size;

      if (size === 0) {
        response = "No hay productos.";
      } else {
        productsRetrieved = (await query.get()).docs.map((doc) => ({
          ...doc.data(),
          idFirebase: doc.id,
        }));

        response = productsRetrieved;
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}