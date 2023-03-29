import React from "react";

export default function Title() {
  return (
    <div className="flex justify-between items-center mb-4 h-20 px-4 py-2 bg-slate-300 border-b-2 first-letter:">
      <h2 className="font-bold text-4xl font-serif">Aunty's Food</h2>
      <ul className="flex ">
        <li className="px-2">Home</li>
        <li className="px-2">About Us</li>
        <li className="px-2">Cart</li>
      </ul>
    </div>
  );
}
