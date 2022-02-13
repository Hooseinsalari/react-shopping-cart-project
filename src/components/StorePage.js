import React, { useContext, useState, useEffect } from "react";

// component
import Product from "./shared/Product";

// context
import { ProductsContext } from "../context/ProductsContextProvider";

// style
import styles from "./StorePage.module.css";
import Loading from "./shared/Loading";

const StorePage = () => {

  const products = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState("")
  const [selectValue, setSelectValue] = useState("")

  useEffect(() => {
    if(products) {
      setFilteredProducts(products)
    }
  }, [products])

  useEffect(() => {
    setSearch("")
  }, [selectValue])

  const filterHandler = (event) => {
    setSelectValue(event.target.value)
    const updateProducts = products.filter((product) => product.category.includes(event.target.value))
    setFilteredProducts(updateProducts)
  }

  const searchHandler = (event) => {
    setSearch(event.target.value);
    const updateProducts = products.filter((product) => product.category.includes(selectValue))
    if(search !== "") {
      const filterProducts = updateProducts.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    setFilteredProducts(filterProducts) 
    }    
  }

  

  return (
    <div className={styles.storePage}>

      {products.length ? (
        <>
          <div className={styles.searchSection}>
            <input type="text" value={search} onChange={searchHandler} />
            <select onChange={filterHandler}>
              <option value="">All</option>
              <option value="clothing">clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
            </select>
          </div>
          <div className={styles.container}>
          {filteredProducts.map((product) => (
            <Product key={product.id} productData={product} />
          ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default StorePage;
