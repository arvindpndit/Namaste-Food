import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlices";

const RestaurantItemCard = (props) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="relative">
      <div className="flex w-9/12 mx-auto gap-4 p-5 hover:border">
        <div className="w-9/12">
          <h2 className="font-2xl font-bold text-[#3F4255] my-1">
            {props.item.card.info.name}
          </h2>
          <p className="text-[#737171] my-1 font-semibold">
            ₹{props?.item?.card?.info?.price / 100}
          </p>
          <p className="text-[#909090] text-sm">
            {props?.item?.card?.info?.description}
          </p>
        </div>
        <img
          className="w-52 h-32 object-cover"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
            props.item.card.info.imageId
          }
        />

        <button
          onClick={() => handleAddItem(props.item.card)}
          className="absolute top-[70%] left-[73.3%] bg-green-50 text-[#3F4255] hover:bg-green-100 font-semibold p-2 uppercase"
        >
          Add Item+
        </button>
      </div>
    </div>
  );
};

export default RestaurantItemCard;
