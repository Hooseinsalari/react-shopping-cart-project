import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// styles
import styles from "./ProductDetails.module.css"

// context
import { ProductsContext } from '../context/ProductsContextProvider';

// function
import { shortenedTitle } from './helper/functions';

// api
import { getOneProductApi } from '../services/api';
import axios from 'axios';

const ProductDetails = () => {

    const products = useContext(ProductsContext)

    const params = useParams()
    const id = params.id
    const index = id - 1

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
             setData(await getOneProductApi(params.id))
        }

        fetchApi()
    }, [products])

    return (
        <div className={styles.container}>
            {
                data ?
                <div className={styles.product}>
                    <img src={data.image} alt="logo" className={styles.proImage} />
                    <div className={styles.proData}>
                        <h2 className={styles.proTitle}>{data.title}</h2>
                        <p className={styles.proPrice}>${data.price}</p>
                        <p className={styles.proDesc}>{data.description}</p>
                    </div>
                </div>:
            <h1>Loading</h1>
            }
        </div>
    );
};

export default ProductDetails;