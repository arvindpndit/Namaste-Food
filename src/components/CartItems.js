import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlices";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    console.log(item);
    dispatch(removeItem(item));
  };

  return (
    <div>
      <div className="h-28 w-full border rounded-2xl p-3 flex items-center justify-between mb-5 shadow-sm hover:bg-green-50">
        <div className="flex items-center gap-5">
          <img
            src={
              "https://corsproxy.io/?https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              props?.info?.imageId
            }
            alt=""
            className="w-40 h-24 rounded-2xl object-cover"
          />
          <div>
            <p className="font-semibold text:md md:text-lg text-[#3F4255]">
              {props.info.name}
            </p>
            <p className="text-[#909090]"> ₹{props.info.price / 100}</p>
          </div>
        </div>

        <button onClick={() => handleRemoveItem(props)}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
