import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// componet
import Product from "./shared/Product";
import Loading from "./shared/Loading";

// redux
import { useSelector, useDispatch } from "react-redux";

// action
import { fetchProducts } from "../redux/products/productsActions";

// styles
import styles from "./HomePage.module.css";

// img
import logo from "../image/logo.jpg";

// slider
// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import Carousel from "./shared/Carousel";

const HomePage = () => {
  const products = useSelector((state) => state.productsState.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, []);

  // for slider 
  
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }

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
      <section className={styles.firstSection}>
      <Carousel category="clothing" />
        
      </section>
      <section>
        <Carousel category="jewelery" />
      </section>
      <section>
        <Carousel category="electronics" />
      </section>
    </div>
  );
};

export default HomePage;
