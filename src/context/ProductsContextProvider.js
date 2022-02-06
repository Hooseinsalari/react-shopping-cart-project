// this context for get api from api and push in the products state

import React, { createContext, useEffect, useState } from 'react';

import { getProductsApi } from '../services/api';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getProductsApi())
        }

        fetchApi()
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;