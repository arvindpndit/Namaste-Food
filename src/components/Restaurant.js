import React from "react";

export default function Restaurant(props) {
  return (
    <div>
      <div className="flex flex-col flex-wrap border-2 h-80 w-52 m-4 rounded-md p-1 bg-slate-200 ">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            props?.data?.cloudinaryImageId
          }
          alt="food"
          className="h-36 rounded-md"
        />

        <h3 className="font-bold font-lg">{props.data.name}</h3>
        <h4>{props?.data?.cuisines.join(" ")}</h4>
        <h5>{props?.data?.minDeliveryTime} Minutes</h5>
        <h5> {props?.data?.costForTwoString}</h5>
      </div>
    </div>
  );
}
