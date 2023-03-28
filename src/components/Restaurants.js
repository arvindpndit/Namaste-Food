import React from "react";
import Restaurant from "./Restaurant";
import { useState } from "react";

export function Search({ products, setData }) {
  const [searchText, setSearchText] = useState("");

  function changeHandler(e) {
    setSearchText(e.target.value);
  }

  function filterData(searchText, restaurant) {
    const dataFiltered = restaurant.filter((product) => {
      return product?.name.toLowerCase().includes(searchText.toLowerCase());
    });

    //console.log(dataFiltered);
    return dataFiltered;
  }

  return (
    <div className="mx-auto max-w-max w-[100wh]">
      <input
        className="bg-slate-200 m-1 p-2 rounded-md"
        type="text"
        placeholder="Search your food"
        title="food"
        name="searchText"
        id="searchText"
        value={searchText}
        onChange={changeHandler}
      />
      <button
        htmlFor="searchText "
        className="w-20  p-2 rounded-md bg-sky-500/50 font-bold"
        onClick={() => {
          //filter the values
          const newData = filterData(searchText, products);
          //set the new values
          console.log(newData);
          setData(newData);
        }}
      >
        Search
      </button>
    </div>
  );
}

function Restaurants(props) {
  const products = props.products;
  // console.log("products mila");
  // console.log(products);
  return (
    <div className="flex flex-wrap w-3/5 mx-auto content-between">
      {products?.map((product) => {
        return <Restaurant {...product} key={product?.data?.id} />;
      })}
    </div>
  );
}
export default Restaurants;
