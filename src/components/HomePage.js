import React from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./HomePage.module.css";

// img
import logo from "../image/logo.jpg";


const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heafLeft}>
        <h1 className={styles.firstText}>WELCOME TO SHOP</h1>
        <Link to="/products" className={styles.storeLink}>
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
