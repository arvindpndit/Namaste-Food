import React from "react";
import Restaurant from "./Restaurant";

import { Link } from "react-router-dom";

function Restaurants(props) {
  const products = props.products;

  return (
    <div className="flex flex-wrap mx-auto justify-evenly px-8 ">
      {products?.map((product) => {
        return (
          <Link to={"restaurant/" + product.data.id} key={product?.data?.id}>
            <Restaurant {...product} />
          </Link>
        );
      })}
    </div>
  );
}
export default Restaurants;
