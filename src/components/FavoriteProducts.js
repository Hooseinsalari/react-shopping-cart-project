import React from "react";
import { Link } from "react-router-dom";

// component
import Product from "./shared/Product";

// styles
import styles from "./FavoriteProducts.module.css";

// redux
import { useSelector } from "react-redux";

const FavoriteProducts = ({ favoriteItems, setFavoriteItems }) => {
  const products = useSelector((state) => state.productsState);

  const addToFavorite = (id) => {
    const index = products.findIndex((p) => p.id === id);
    const selectedProduct = { ...products[index], isFavorite: true };
    if (!favoriteItems.find((product) => product.id === id)) {
      setFavoriteItems([...favoriteItems, selectedProduct]);
    }
  };

  const removeFromFavorite = (id) => {
    const updateFavoriteItems = favoriteItems.filter(
      (product) => product.id !== id
    );
    setFavoriteItems(updateFavoriteItems);
  };

  return (
    <div className={styles.container}>
      {favoriteItems.length ? favoriteItems.map((product) => (
        <Product
          key={product.id}
          productData={product}
          favoriteItems={favoriteItems}
          addToFavorite={addToFavorite}
          removeFromFavorite={removeFromFavorite}
        />
      )) : <div className={styles.emptyAlert}>
            <h1>Your Favorite Items Is Empty</h1>
            <Link to="/products">Let's add your favorite</Link>
          </div>} 
    </div>
  );
};

export default FavoriteProducts;
