import React, { useContext } from "react";

// component
import Product from "./shared/Product";

// context
import { ProductsContext } from "../context/ProductsContextProvider";

// style
import styles from "./StorePage.module.css";

const StorePage = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      {products.length ? (
        products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default StorePage;
