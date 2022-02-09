import React, { useContext } from 'react';

// style
import styles from "./Product.module.css";

// context
import { CartContext } from '../../context/CartContextProvider';

// function
import { isInCart, quantityCount, shortenedTitle } from '../helper/functions';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className={styles.container}>
            <img src={productData.image} alt={productData.title} />
            <div>
                <p className={styles.container__title}>{shortenedTitle(productData.title)}</p>
                <p>{productData.price}</p>
            </div>
            <p>Details</p>
            {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>remove</button>}
            {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
            {
                isInCart(state, productData.id) ?
                <button onClick={() => dispatch({type: "INCREASE", payload: productData})}>add</button>:
                <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>add to cart</button>
            }
        </div>
    );
};

export default Product;