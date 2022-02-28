import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// componet
import Loading from "./shared/Loading";
import Carousel from "./shared/Carousel";

// redux
import { useSelector, useDispatch } from "react-redux";

// action
import { fetchProducts } from "../redux/products/productsActions";

// styles
import styles from "./HomePage.module.css";

// img
import logo from "../image/logo.jpg";
import firstPoster from "../image/first.jpg";

const HomePage = () => {
  const products = useSelector((state) => state.productsState.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
      {products.length ? (
        <>
          <section>
            <Carousel category="clothing" />
          </section>
          <div className={styles.poster}>
            <img src={firstPoster} alt="logo" />
          </div>
          <section>
            <Carousel category="jewelery" />
          </section>
          <div className={styles.parallax}>{/* image added in css code */}</div>
          <section>
            <Carousel category="electronics" />
          </section>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomePage;
