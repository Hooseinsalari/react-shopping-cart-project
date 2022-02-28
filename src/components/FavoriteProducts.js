import React from "react";
import { Link } from "react-router-dom";

// component
import Product from "./shared/Product";

// styles
import styles from "./FavoriteProducts.module.css";

// redux
import { useSelector } from "react-redux";

const FavoriteProducts = () => {
  const favoriteItems = useSelector(
    (state) => state.favoriteState.favoriteItems
  );

  return (
    <div className={styles.container}>
      {favoriteItems.length ? (
        favoriteItems.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      ) : (
        <div className={styles.emptyAlert}>
          <h1>Your Favorite Items Is Empty</h1>
          <Link to="/products">Let's add your favorite</Link>
        </div>
      )}
    </div>
  );
};

export default FavoriteProducts;
