import React from "react";
import Restaurant from "./Restaurant";
import { products } from "./constants";
import { useState } from "react";

export function Search() {
  const [searchText, setSearchText] = useState("");

  function changeHandler(e) {
    setSearchText(e.target.value);
  }

  const [restaurant, setRestaurant] = useState(products);

  function filterData(searchText, restaurant) {
    const dataFiltered = restaurant.filter((product) => {
      return product?.name.toLowerCase().includes(searchText.toLowerCase());
    });

    //console.log(dataFiltered);
    return dataFiltered;
  }

  return (
    <div className="mx-auto w-[100wh]">
      <input
        className="bg-slate-200 m-1 p-2 rounded-md "
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
          const newData = filterData(searchText, restaurant);
          //set the new values
          console.log(newData);
          setRestaurant(newData);
        }}
      >
        Search
      </button>
    </div>
  );
}

function Restaurants() {
  return (
    <div className="flex flex-wrap w-3/5 mx-auto content-between">
      {/* <Restaurant product = {products[0]}/>
      <Restaurant product = {products[1]}/>
      <Restaurant product = {products[2]}/>dd
      <Restaurant product = {products[3]}/>
      <Restaurant product = {products[4]}/>
      <Restaurant product = {products[5]}/>
      <Restaurant product = {products[6]}/>
      <Restaurant product = {products[7]}/> */}
      {products.map((product) => {
        return <Restaurant {...product} key={product.name} />;
      })}
    </div>
  );
}
export default Restaurants;
