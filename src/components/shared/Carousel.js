import React, {useEffect} from 'react';

// componet
import Product from './Product';
import Loading from './Loading';

// redux
import { useSelector, useDispatch } from "react-redux";

// action
import { fetchProducts } from '../../redux/products/productsActions'; 

// styles
import styles from "./Carousel.module.css";

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

const Carousel = ({category}) => {
    const products = useSelector((state) => state.productsState.products);
    const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, []);

  // for slider 
  
  const breakpoints = {
    320: {
      slidesPerView: 1,
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
        <div>
            <Swiper
          slidesPerView={6}
          spaceBetween={100}
          freeMode={true}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,

          }}
          breakpoints={breakpoints}
          modules={[FreeMode, Pagination, Navigation]}
          className={styles.swiper}
        >
          {products.length ? (
            products.filter((product) => product.category.includes(category)).map((product) => <SwiperSlide className={styles.swiperSlide} key={product.id}>
            
            <Product productData={product} key={product.id} />
          </SwiperSlide>)
          ) : (
            <h1>Loading please wait</h1>
          )}
        </Swiper>
        </div>
    );
};

export default Carousel;