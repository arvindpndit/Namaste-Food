import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Title() {
  const itemCart = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-14 h-20 mb-4 top-0 sticky bg-[#FFFFFF] z-10 border-b-[1px]  border-[#D4D7E5]">
      <div className="h-20 w-80 flex items-center overflow-hidden ">
        <p className="font-bold text-4xl text-[#3F4255] ">namaste food</p>
      </div>

      <ul className="flex text-[#9093A6] ">
        <li className="px-3 font-semibold hover:underline hover:font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 font-semibold hover:underline hover:font-bold">
          <Link to="/body">Menu</Link>
        </li>
        <li className="px-3 font-semibold hover:font-bold hover:underline duration-600">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-3 font-semibold hover:font-bold hover:underline duration-600">
          <Link to="/help">Help</Link>
        </li>
        <li className="px-3 font-semibold hover:font-bold">
          <Link to="/cart">
            Cart{" "}
            {itemCart.length > 0 && (
              <span className="rounded-full bg-[#3F4255] px-[6px] text-white">
                {itemCart.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}
