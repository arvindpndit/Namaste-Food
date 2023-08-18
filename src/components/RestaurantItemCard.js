import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlices";
import { BsCheckLg } from "react-icons/bs";

const RestaurantItemCard = (props) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-full p-3 md:px-14">
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex items-center">
        <img
          className="h-24 w-24 object-cover"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
            props.item.card.info.imageId
          }
          alt="food"
        />
        <div className="flex-grow p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {props.item.card.info.name}
          </h2>
          <p className="text-sm text-gray-600 font-semibold mt-1">
            ₹{props?.item?.card?.info?.price / 100}
          </p>
          <p className="text-xs text-gray-500 mt-1 hidden md:block ">
            {props?.item?.card?.info?.description}
          </p>
        </div>
        <div className="flex-shrink-0 p-4">
          <button
            onClick={() => handleAddItem(props.item.card)}
            className="bg-green-100 text-gray-800 hover:bg-green-200 font-semibold px-3 py-1 text-xs uppercase rounded-md"
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItemCard;
