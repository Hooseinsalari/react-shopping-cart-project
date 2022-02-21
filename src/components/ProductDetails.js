import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// styles
import styles from "./ProductDetails.module.css";

// function
import { shortenedTitle } from "./helper/functions";

// api
import { getOneProductApi } from "../services/api";

// component
import Loading from "./shared/Loading";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const params = useParams();
  const data = useSelector((state) => state.productsState.products);

  const [product, setProduct] = useState(data[params.id - 1]);

  if (!product) {
    const fetchApi = async () => {
      setProduct(await getOneProductApi(params.id));
    };
    fetchApi();
  }

  return (
    <div className={styles.container}>
      {product ? (
        <div className={styles.product}>
          <img src={product.image} alt="logo" className={styles.proImage} />
          <div className={styles.proData}>
            <div className={styles.topSection}>
              <h2 className={styles.proTitle}>
                {shortenedTitle(product.title)}
              </h2>
              <p className={styles.proPrice}>${product.price}</p>
            </div>
            <p className={styles.proDesc}>{product.description}</p>
            <div className={styles.footer}>
              <Link to="/products" className={styles.backLink}>
                Back to shop
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductDetails;
