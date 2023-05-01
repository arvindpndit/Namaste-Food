import React from "react";

export default function Restaurant(props) {
  return (
    <div>
      <div
        className="flex flex-col flex-wrap border-2 h-80 w-72 p-3 m-4  hover:scale-105 duration-300 hover:shadow-lg
       "
      >
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            props?.data?.cloudinaryImageId
          }
          alt="food"
          className="h-40- w-full object-cover lazy"
        />

        <h3 className="font-semibold mt-3 font-lg">{props.data.name}</h3>
        <h4 className="text-xs">{props?.data?.cuisines.join(", ")}</h4>
        <h5 className="mt-1 text-sm">{props?.data?.minDeliveryTime} MINS</h5>
        <h5> {props?.data?.costForTwoString}</h5>
      </div>
    </div>
  );
}
