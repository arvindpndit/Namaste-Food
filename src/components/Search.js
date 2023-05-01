import { useState } from "react";

const Search = ({ products, setData }) => {
  const [filteredProducts] = useState(products);
  const [searchText, setSearchText] = useState("");

  function filterData(searchText, products) {
    const dataFiltered = products.filter((product) => {
      return product?.data?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    //console.log(dataFiltered);
    return dataFiltered;
  }

  return (
    <form
      className="md:w-1/2 w-3/4 h-16 flex justify-center items-center mx-auto my-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="shadow-sm bg-white border border-r-0  p-4 w-3/4 text-[#008037] outline-none"
        type="text"
        placeholder="Search your food"
        title="food"
        name="searchText"
        id="searchText"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        htmlFor="searchText "
        className="shadow-sm border border-l-0   bg-[#FFE145] text-semibold p-4  text-[#B79C10] "
        onClick={() => {
          //filter the values
          const newData = filterData(searchText, filteredProducts);
          //set the new values
          //console.log(newData);
          setData(newData);
        }}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
