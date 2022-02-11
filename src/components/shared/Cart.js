import React, { useContext } from 'react';

// function
import { shortenedTitle } from '../helper/functions';

// context
import { CartContext } from '../../context/CartContextProvider';

// style
import styles from "./Cart.module.css"

// icons
import { FaMinus, FaTrash, FaPlus } from "react-icons/fa";

const Cart = ({data}) => {

    const {image, title, price, quantity} = data;

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={image} alt="logo" className={styles.proImage} />
            <div className={styles.information}>
                <h3>{shortenedTitle(title)}</h3>
                <p>${price}</p>
            </div>
            <div>
                <p className={styles.quantity}>{quantity}</p>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button className={styles.decreaceBtn} onClick={() => dispatch({type:"DECREASE", payload: data})}><FaMinus /></button>:
                    <button className={styles.trashBtn} onClick={() => dispatch({type:"REMOVE_ITEM", payload: data})}><FaTrash/></button>
                }
                <button className={styles.plusBtn} onClick={() => dispatch({type: "INCREASE", payload: data})}><FaPlus /></button>
            </div>
        </div>
    );
};

export default Cart;