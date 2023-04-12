import React from "react";
import Restaurant from "./Restaurant";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="w-1/2 h-16 flex justify-center items-center mx-auto">
      <input
        className="rounded-full bg-[#fff9f0] p-4 w-3/4 text-[#008037]"
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
        className=" rounded-full bg-[#00803774] p-4 ml-3 w-[15%] hover:bg-[#00803798] text-[#008037] "
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
    <div className="flex flex-wrap mx-auto justify-evenly px-8 ">
      {products?.map((product) => {
        return (
          <Link to={"restaurant/" + product.data.id}>
            <Restaurant {...product} key={product?.data?.id} />
          </Link>
        );
      })}
    </div>
  );
}
export default Restaurants;
