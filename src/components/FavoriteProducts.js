import React, { useContext } from 'react';

// context
import { ProductsContext } from '../context/ProductsContextProvider';

// component
import Product from './shared/Product';

// styles
import styles from "./FavoriteProducts.module.css";


const FavoriteProducts = ({favoriteItems, setFavoriteItems}) => {
    const products = useContext(ProductsContext)

    const addToFavorite = (id) => {
        const index = products.findIndex((p) => p.id === id)
        const selectedProduct = {...products[index], isFavorite: true}
        if(!favoriteItems.find((product) => product.id === id)) {
          setFavoriteItems([...favoriteItems, selectedProduct])
        }    
      }
    
      const removeFromFavorite = (id) => {
        const updateFavoriteItems = favoriteItems.filter((product) => product.id !== id)
        setFavoriteItems(updateFavoriteItems)
      }

    return (
        <div className={styles.container}>
            {
                favoriteItems.map((product) => <Product key={product.id} productData={product} favoriteItems={favoriteItems} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} />)
            }
        </div>
    );
};

export default FavoriteProducts;