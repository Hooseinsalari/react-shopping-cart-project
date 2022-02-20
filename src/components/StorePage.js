import React, { useContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// react-select
import Select from 'react-select';

// component
import Product from "./shared/Product";

// context
import { ProductsContext } from "../context/ProductsContextProvider";

// style
import styles from "./StorePage.module.css";
import Loading from "./shared/Loading";
import FavoriteProducts from "./FavoriteProducts";

const StorePage = () => {

  const products = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState("")
  const [selectValue, setSelectValue] = useState("")

  useEffect(() => {
    if(products.length) {
      setFilteredProducts(products)
    }
  }, [products])

  useEffect(() => {
    setSearch("")
  }, [selectValue])

  useEffect(() => {
    setSelectValue({value: "", label: "All"})
  }, [])

  const selectOptions = [
    {value: "", label: "All"},
    {value: "clothing", label: "clothing"},
    {value: "jewelery", label: "jewelery"},
    {value: "electronics", label: "electronics"}
  ]

  const filterHandler = (selectedOption) => {
    setSelectValue(selectedOption)
    const updateProducts = products.filter((product) => product.category.includes(selectedOption.value))
    setFilteredProducts(updateProducts)
  }

  const searchHandler = (event) => {
    setSearch(event.target.value);
    const updateProducts = products.filter((product) => product.category.includes(selectValue.value))
    const searchProducts = updateProducts.filter((product) => product.title.toLowerCase().includes(event.target.value.toLowerCase())) 
    setFilteredProducts(searchProducts)
  } 

  // for favorite items
  const [favoriteItems, setFavoriteItems] = useState([])

  const addToFavorite = (id) => {
    const index = products.findIndex((p) => p.id === id)
    const selectedProduct = {...products[index], isFavorite: true}
    if(!favoriteItems.find((product) => product.id === id)) {
      setFavoriteItems([...favoriteItems, selectedProduct])
    }    
  }

  const removeFromFavorite = (id) => {
    const updateFavoriteItems = favoriteItems.filter((product) => product.id !== id)
    // console.log(updateFavoriteItems)
    setFavoriteItems(updateFavoriteItems)
  }

  return (
    <div className={styles.storePage}>
      {products.length ? (
        <>
          <div className={styles.searchSection}>
            <input type="text" value={search} onChange={searchHandler} placeholder="Search product" />
            <Select
              value={selectValue}
              onChange={filterHandler}
              options={selectOptions}
              className={styles.select}
            />
          </div>
          <div className={styles.container}>
          {filteredProducts.map((product) => (
            <Product key={product.id} productData={product} favoriteItems={favoriteItems} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} />
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
