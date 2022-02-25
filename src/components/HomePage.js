import React, { useState } from "react";
import { Link } from "react-router-dom";

// componet
import Product from "./shared/Product";

// redux
import { useSelector } from "react-redux";

// styles
import styles from "./HomePage.module.css";

// img
import logo from "../image/logo.jpg";

// slider
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";



const HomePage = () => {
  
  const products = useSelector((state) => state.productsState.products)

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
        {/* <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className={styles.swiper}
        >
          {
            products.length ?
            products.map((product) => <SwiperSlide key={product.id} className={styles.swiperSlide}>
              <Product productData={product} />
            </SwiperSlide>) : <h1>Loading</h1>
          }
        </Swiper> */}
      </section>
    </div>
  );
};

export default HomePage;
