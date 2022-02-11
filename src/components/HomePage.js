import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./HomePage.module.css";

// img
import logo from "../image/three.jpg";
import image_1 from "../image/second.jpg";

// context
import { ProductsContext } from "../context/ProductsContextProvider";

// component
import Product from "./shared/Product";

const HomePage = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={styles.container}>
        <div className={styles.heafLeft}>
          <h1 className={styles.firstText}>WELCOME TO SHOP</h1>
          <Link to="/store" className={styles.storeLink}>
            <h3 className={styles.text}>Let's see store</h3>
          </Link>
        </div>
        <div className={styles.headRight}>
          <img src={logo} alt="logo" />
        </div>
    </div>
  );
};

export default HomePage;
