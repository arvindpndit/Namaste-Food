import React from "react";

export default function Title() {
  return (
    <div className="flex justify-between mb-4 px-4 py-2 bg-slate-300">
      <h2 className="font-bold text-2xl">Aunty's Food</h2>
      <ul className="flex ">
        <li className="px-2">Home</li>
        <li className="px-2">About Us</li>
        <li className="px-2">Cart</li>
      </ul>
    </div>
  );
}
