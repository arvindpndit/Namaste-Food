import React from "react";

export default function Restaurant(props) {
  // console.log( props.product.name )
  //console.log(name);
  return (
    <div>
      <div className="flex flex-col border-2 h-52 w-40 m-4 rounded-md p-1 bg-slate-200">
        <img src={props.img} alt="food" className="h-36 rounded-md" />
        <h3 className="font-bold font-lg">{props.name}</h3>
        <h4>${props.price}</h4>
      </div>
    </div>
  );
}
