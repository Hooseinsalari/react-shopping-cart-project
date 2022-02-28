import React from "react";
import { Link } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";

// component
import Cart from "./shared/Cart";

// styles
import styles from "./ShopCart.module.css";

// Actions
import { clear, checkout } from "../redux/cart/cartActions";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments: </span>${state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.clear} onClick={() => dispatch(clear())}>
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <p>Check Out Successfully</p>
          <Link to="/products">Buy More</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <p>Do you want to buy?</p>
          <Link to="/products">Back To Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
