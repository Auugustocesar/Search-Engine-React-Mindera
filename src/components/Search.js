import React, { useState, useEffect } from "react";

import "../styles/Search.css";
import { ToggleColumns } from "./ToggleColumns";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";
import products from "../assets/products.json";

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrice((prevState) => ({ ...prevState, [name]: value }));
  };

  const onCheckboxClick = (name, checked) => {
    setColumns((prevState) => ({ ...prevState, [name]: checked }));
  };

  const filterProducts = () => {
    const max = price.priceTo || Number.MAX_SAFE_INTEGER;
    const min = price.priceFrom || 0;
    const filteredProducts = products.filter((product) => {
      return product.price <= max && product.price >= min;
    });
    setDisplayedProducts(filteredProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [price]);

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={displayedProducts} columns={columns} />
    </div>
  );
};

export default Search;
