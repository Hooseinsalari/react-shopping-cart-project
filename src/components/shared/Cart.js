import React from "react";

// function
import { shortenedTitle } from "../helper/functions";

// redux
import { useDispatch } from "react-redux";

// style
import styles from "./Cart.module.css";

// icons
import { FaMinus, FaTrash, FaPlus } from "react-icons/fa";

// Actions
import { removeItem, increase, decrease } from "../../redux/cart/cartActions";

const Cart = ({ data }) => {
  const { image, title, price, quantity } = data;

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img src={image} alt="logo" className={styles.proImage} />
      <div className={styles.information}>
        <h3>{shortenedTitle(title)}</h3>
        <p>${price}</p>
      </div>
      <div>
        <p className={styles.quantity}>{quantity}</p>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            className={styles.decreaceBtn}
            onClick={() => dispatch(decrease(data))}
          >
            <FaMinus />
          </button>
        ) : (
          <button
            className={styles.trashBtn}
            onClick={() => dispatch(removeItem(data))}
          >
            <FaTrash />
          </button>
        )}
        <button
          className={styles.plusBtn}
          onClick={() => dispatch(increase(data))}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Cart;
