import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// style
import styles from "./Product.module.css";

// context
import { CartContext } from '../../context/CartContextProvider';

// function
import { isInCart, quantityCount, shortenedTitle } from '../helper/functions';

// icons
import { FaRegMinusSquare, FaTrash, FaRegPlusSquare } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";


const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext)

    const [favorite, setFavorite] = useState(false);

    // const favoriteHandler = () => {
        
    // }

    // const favoriteItems =  state.favoriteItems.filter((item) => item.favorite === true)
    // console.log(favoriteItems)

    
        // const indexF = state.favoriteItems.findIndex((item) => (item.id === productData.id) > 0)


    return (
        <div className={styles.container}>
            <img src={productData.image} alt={productData.title} className={styles.proImage} />
            
        
            {/* <FcLikePlaceholder className={styles.likeIcon} onClick={() =>dispatch({type: "FAVORITE", payload: productData}) } /> */}
                
            {/* <FcLike className={styles.likeIcon} onClick={ () => dispatch({type: "REMOVE_FAVORITE", payload: productData})} /> */}
            
            <div className={styles.topSection}>
                <p className={styles.containerTitle}>{shortenedTitle(productData.title)}</p>
                <p>${productData.price}</p>
            </div>
            <div className={styles.downSection}>
                <Link to={`/details/${productData.id}`} className={styles.proDetails}>Details</Link>
                <div className={styles.btnContainer}>
                    {quantityCount(state, productData.id) === 1 && <button className={styles.trashBtn} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><FaTrash /></button>}
                    {quantityCount(state, productData.id) > 1 && <button className={styles.decreaceBtn} onClick={() => dispatch({type: "DECREASE", payload: productData})}><FaRegMinusSquare /></button>}
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.plusBtn} onClick={() => dispatch({type: "INCREASE", payload: productData})}><FaRegPlusSquare /></button>:
                        <button className={styles.addBtn} onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;