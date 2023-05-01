import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Title() {
  const itemCart = useSelector((store) => store.cart.items);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between  items-center  md:px-14 h-20 mb-4  border-b-[1px]  border-[#D4D7E5]  w-full bg-white fixed z-50">
      <div className="h-20 w-80 px-2 flex items-center ">
        <p className="font-bold text-4xl text-[#3F4255] ">
          namaste f<span className="text-yellow-500">oo</span>d
        </p>
      </div>

      <ul className="md:flex text-[#9093A6] hidden">
        <li className="px-3 font-semibold hover:underline hover:font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 font-semibold hover:underline hover:font-bold">
          <Link to="/body">Menu</Link>
        </li>
        <li className="px-3 font-semibold hover:font-bold hover:underline duration-600">
          <Link to="/about">About Me</Link>
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

      {showMenu && (
        <ul className="flex-col text-[#9093A6] md:hidden fixed top-20 z-40 w-full bg-white rounded-lg  py-3 shadow-md	">
          <li
            className="px-3 font-semibold hover:underline hover:font-bold py-3 hover:bg-gray-100"
            onClick={() => setShowMenu(false)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="px-3 py-3 font-semibold hover:underline hover:font-bold hover:bg-gray-100 "
            onClick={() => setShowMenu(false)}
          >
            <Link to="/body">Menu</Link>
          </li>
          <li
            className="px-3 py-3 font-semibold hover:font-bold hover:underline hover:bg-gray-100"
            onClick={() => setShowMenu(false)}
          >
            <Link to="/about">About Me</Link>
          </li>

          <li
            className="px-3 py-3 font-semibold hover:font-bold hover:bg-gray-100"
            onClick={() => setShowMenu(false)}
          >
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
      )}

      <GiHamburgerMenu
        className="visible md:hidden text-3xl mx-2 text-[#3F4255] hover:cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
    </div>
  );
}
