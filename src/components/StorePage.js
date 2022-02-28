import React, { useState, useEffect } from "react";

// react-select
import Select from "react-select";

// component
import Product from "./shared/Product";
import Loading from "./shared/Loading";

// redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productsActions";

// style
import styles from "./StorePage.module.css";

const StorePage = () => {
  const productsState = useSelector((state) => state.productsState);
  const products = productsState.products;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    if (products.length) {
      setFilteredProducts(products);
    }
  }, [products]);

  useEffect(() => {
    setSearch("");
  }, [selectValue]);

  useEffect(() => {
    setSelectValue({ value: "", label: "All" });
  }, []);

  const selectOptions = [
    { value: "", label: "All" },
    { value: "clothing", label: "clothing" },
    { value: "jewelery", label: "jewelery" },
    { value: "electronics", label: "electronics" },
  ];

  const filterHandler = (selectedOption) => {
    setSelectValue(selectedOption);
    const updateProducts = products.filter((product) =>
      product.category.includes(selectedOption.value)
    );
    setFilteredProducts(updateProducts);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
    const updateProducts = products.filter((product) =>
      product.category.includes(selectValue.value)
    );
    const searchProducts = updateProducts.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(searchProducts);
  };

  return (
    <div className={styles.storePage}>
      {!productsState.isLoading ? (
        <>
          <div className={styles.searchSection}>
            <input
              type="text"
              value={search}
              onChange={searchHandler}
              placeholder="Search product"
            />
            <Select
              value={selectValue}
              onChange={filterHandler}
              options={selectOptions}
              className={styles.select}
            />
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
