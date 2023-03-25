import React, { useState } from "react";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";
import { Search } from "./Restaurants";
import { products } from "./constants";

export default function Body() {
  const [newProducts, setProducts] = useState(products);

  function setData(newData) {
    setProducts(newData);
  }

  return (
    <div className="w-[100wh]">
      <Search products={newProducts} setData={setData} />
      <Restaurants products={newProducts} />
    </div>
  );
}
