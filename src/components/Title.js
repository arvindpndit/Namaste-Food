import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

export default function Title() {
  return (
    <div className="flex justify-between items-center mx-16 h-16 my-4 ">
      <img src={logo} className="h-40 p-3" />
      <ul className="flex text-[#008037]">
        <li className="px-3 hover:underline hover:font-bold">
          <Link to="/home">Home</Link>
        </li>
        <li className="px-3 hover:underline hover:font-bold">
          <Link to="/">Menu</Link>
        </li>
        <li className="px-3 hover:font-bold hover:underline duration-600">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-3 hover:underline hover:font-bold">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
