import React from "react";

export default function Restaurant(props) {
  return (
    <div className="w-72 p-2 md:p-3 ">
      <div className="  overflow-hidden  hover:scale-95 transition duration-200">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            props?.info?.cloudinaryImageId
          }
          alt="food"
          className="h-40 w-full object-cover rounded-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{props.info.name}</h3>
          <h4 className="text-xs text-gray-600 mt-1">
            {props?.info?.cuisines.join(", ")}
          </h4>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">
              {props?.info?.avgRating} stars
            </span>
            <span className="ml-2 text-gray-500">
              ({props?.info?.numRatings} ratings)
            </span>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            {props?.info?.aggregatedDiscountInfoV3?.header}{" "}
            {props?.info?.aggregatedDiscountInfoV3?.subHeader}
          </div>
          <div className="mt-1 text-xs text-gray-500">
            {
              props?.info?.aggregatedDiscountInfoV3?.discountCalloutInfo
                ?.message
            }
          </div>
        </div>
      </div>
    </div>
  );
}
