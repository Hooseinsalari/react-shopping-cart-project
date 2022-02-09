import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { CartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <Link to="/cart"><p>Cart</p></Link>
            <span>{state.itemsCounter}</span>
        </div>
    );
};

export default Navbar;