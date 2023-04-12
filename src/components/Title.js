import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Title() {
  return (
    <div className="flex justify-between items-center px-14 h-20 my-4 top-0 sticky bg-[#FFFFFF] z-10">
      <div className="h-20 w-40 overflow-hidden ">
        <img src={logo} className="mt-[-40px] " />
      </div>

      <ul className="flex text-[#008037]">
        <li className="px-3 hover:underline hover:font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 hover:underline hover:font-bold">
          <Link to="/body">Menu</Link>
        </li>
        <li className="px-3 hover:font-bold hover:underline duration-600">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-3 hover:font-bold hover:underline duration-600">
          <Link to="/help">Help</Link>
        </li>
        <li className="px-3 hover:underline hover:font-bold">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
