import React, { useContext } from 'react';

// component
import Cart from './shared/Cart';

// context
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div>
          {
              state.selectedItems.map((item) => <Cart key={item.id} data={item} />)
          }  

          {
              state.itemsCounter > 0 && <div>
                  <p><span>Total Items:</span> {state.itemsCounter}</p>
                  <p><span>Total Payment:</span> {state.total}</p>
                  <div>
                        <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button onClick={() => dispatch({type: "CHECK_OUT"})}>Check Out</button>
                  </div>
              </div>
          }

          {
              state.checkout && <div>
                  <h3>Check out successfully</h3>
                  <p>Do yo want more? <Link to="/">Back to shop</Link></p>
              </div>
          }

        {
            !state.checkout && state.itemsCounter === 0 && <div>
                <h3>Want to buy?</h3>
                <Link to="/">Back to shop</Link>
            </div>
        }
        </div>
    );
};

export default ShopCart;