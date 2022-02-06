import React from 'react';

// style
import styles from "./Product.module.css";

const Product = ({productData}) => {
    return (
        <div className={styles.container}>
            <img src={productData.image} alt={productData.title} />
            <p className={styles.container__title}>{productData.title}</p>
            <p>{productData.price}</p>
            <p>Details</p>
            <button>add to cart</button>
        </div>
    );
};

export default Product;