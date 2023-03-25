import React from "react";
import Restaurants from "./Restaurants";
import Restaurant from "./Restaurant";
import { Search } from "./Restaurants";

export default function Body() {
  return (
    <div className="w-[100wh]">
      <Search />
      <Restaurants />
    </div>
  );
}
