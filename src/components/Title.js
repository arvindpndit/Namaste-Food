import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div className="flex justify-between items-center mb-4 h-20 px-4 py-2 bg-slate-300 border-b-2 first-letter:">
      <h2 className="font-bold text-4xl font-serif">Aunty's Food</h2>
      <ul className="flex">
        <li className="px-2 hover:underline hover:font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 hover:font-bold hover:underline duration-600">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-2 hover:underline hover:font-bold">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
