import { FiTrash2 } from "react-icons/fi";
import { removeItem } from "../utils/cartSlices";
import { useDispatch } from "react-redux";

const CartItems = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const handleRemoveItem = (props) => {
    dispatch(removeItem(props));
  };
  return (
    <div>
      <div className="h-28 w-full border rounded-2xl p-3 flex items-center justify-between mb-5 shadow-sm hover:bg-green-50">
        <div className="flex items-center gap-5">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              props?.info?.imageId
            }
            alt=""
            className="w-40 h-24 rounded-2xl object-cover"
          />
          <div>
            <p className="font-semibold text-xl text-[#3F4255]">
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