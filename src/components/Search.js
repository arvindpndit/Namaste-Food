import { useState } from "react";

const Search = ({ products, setData }) => {
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
    <div className="md:w-1/2 w-3/4 h-16 flex justify-center items-center mx-auto my-4">
      <input
        className="rounded-sm bg-white shadow-md p-4 w-3/4 text-[#008037] outline-none"
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
        className=" rounded-sm bg-[#FFE145] shadow-md text-semibold p-4 ml-3   text-[#B79C10] "
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
};

export default Search;
