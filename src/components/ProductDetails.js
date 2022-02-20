import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// styles
import styles from "./ProductDetails.module.css"

// context
import { ProductsContext } from '../context/ProductsContextProvider';

// function
import { shortenedTitle } from './helper/functions';

// api
import { getOneProductApi } from '../services/api';

// component
import Loading from './shared/Loading';

const ProductDetails = () => {

    const products = useContext(ProductsContext)

    const params = useParams()

    const [data, setData] = useState(null)

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
                        <div className={styles.topSection}>
                            <h2 className={styles.proTitle}>{shortenedTitle(data.title)}</h2>
                            <p className={styles.proPrice}>${data.price}</p>
                        </div>
                        <p className={styles.proDesc}>{data.description}</p>
                        <div className={styles.footer}>
                            <Link to="/products" className={styles.backLink}>Back to shop</Link>
                        </div>
                    </div>
                </div>:
            <Loading />
            }
        </div>
    );
};

export default ProductDetails;