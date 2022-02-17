import React, { useContext } from "react";
import { Link } from "react-router-dom";

// style
import styles from "./Product.module.css";

// context
import { CartContext } from "../../context/CartContextProvider";

// function
import { isInCart, quantityCount, shortenedTitle } from "../helper/functions";

// icons
import { FaMinus, FaTrash, FaPlus } from "react-icons/fa";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img
        src={productData.image}
        alt={productData.title}
        className={styles.proImage}
      />

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
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <FaTrash />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.decreaceBtn}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
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
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              <FaPlus />
            </button>
          ) : (
            <button
              className={styles.addBtn}
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
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
