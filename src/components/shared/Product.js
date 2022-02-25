import React from "react";
import { Link } from "react-router-dom";

// style
import styles from "./Product.module.css";

// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// function
import { isInCart, quantityCount, shortenedTitle } from "../helper/functions";

// icons
import { FaMinus, FaTrash, FaPlus } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

// Actions
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/cart/cartActions";

import {
  addToFavorite,
  removeFromFavorite,
} from "../../redux/favorite/favoriteActions";

const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const favoriteItems = useSelector(
    (state) => state.favoriteState.favoriteItems
  );
  const products = useSelector((state) => state.productsState.products);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img
        src={productData.image}
        alt={productData.title}
        className={styles.proImage}
      />

      <div>
        {favoriteItems.find(
          (product) => product.id === productData.id && product.isFavorite
        ) ? (
          <FcLike
            className={styles.remveFavorite}
            onClick={() =>
              dispatch(removeFromFavorite(productData.id, products))
            }
          />
        ) : (
          <FcLikePlaceholder
            className={styles.addFavorite}
            onClick={() => dispatch(addToFavorite(productData.id, products))}
          />
        )}
      </div>

      <div className={styles.topSection}>
        <p className={styles.containerTitle}>
          {shortenedTitle(productData.title)}
        </p>
        <p>${productData.price}</p>
      </div>
      <div className={styles.downSection}>
        <Link to={`/products/${productData.id}`} className={styles.proDetails}>
          Details
        </Link>
        <div className={styles.btnContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.trashBtn}
              onClick={() => dispatch(removeItem(productData))}
            >
              <FaTrash />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.decreaceBtn}
              onClick={() => dispatch(decrease(productData))}
            >
              <FaMinus />
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.proCount}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.plusBtn}
              onClick={() => dispatch(increase(productData))}
            >
              <FaPlus />
            </button>
          ) : (
            <button
              className={styles.addBtn}
              onClick={() => dispatch(addItem(productData))}
            >
              add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
