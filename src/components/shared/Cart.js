import React, { useContext } from 'react';

// function
import { shortenedTitle } from '../helper/functions';

// context
import { CartContext } from '../../context/CartContextProvider';

const Cart = ({data}) => {

    const {image, title, price, quantity} = data;

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <img src={image} alt="logo" />
            <div>
                <h3>{shortenedTitle(title)}</h3>
                <p>${price}</p>
            </div>
            <div>
                <p>{quantity}</p>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type:"DECREASE", payload: data})}>-</button>:
                    <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: data})}>delete</button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;