import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// componet
import Product from "./shared/Product";
import Loading from "./shared/Loading"

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
        <Swiper
          slidesPerView={6}
          spaceBetween={100}
          freeMode={true}
          navigation={true}
          loop={false}
          showsPagination={false}
          pagination={{
            clickable: true,
          }}
          breakpoints={breakpoints}
          modules={[FreeMode, Pagination, Navigation]}
          className={styles.swiper}
        >
          {/* <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide> */}
          {products.length ? (
            products.filter((product) => product.category.includes("clothing")).map((product) => <SwiperSlide className={styles.swiperSlide} key={product.id}>
            
            <Product productData={product} key={product.id} />
          </SwiperSlide>)
          ) : (
            <Loading />
          )}
        </Swiper>
      </section>
    </div>
  );
};

export default HomePage;
