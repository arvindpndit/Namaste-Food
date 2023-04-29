import { useDispatch, useSelector } from "react-redux";
import { BsApple } from "react-icons/bs";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlices";
import cart from "../assets/cart.png";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="w-11/12 min-h-full mx-auto flex flex-col md:flex-row justify-between mt-32 ">
        <div className="w-full md:w-1/2 ">
          <p className="text-3xl text-[#3F4255] mb-3">Shopping Cart</p>
          <p className="text-md text-[#909090] mb-8">
            You have {cartItems.length} items in your cart.
          </p>
          <div>
            {cartItems.map((item) => {
              return <CartItems {...item} key={item.info.id} />;
            })}
          </div>
          {cartItems.length > 0 && (
            <button
              className="h-10 w-24  text-[#3F4255] font-semibold border-2 rounded-md px-2 hover:bg-green-50"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="w-full md:w-[30%] md:h-[500px] mt-12 md:mt-0">
            <p className="text-xl text-[#3F4255] mb-5">Order Summary</p>
            <button className="h-12 w-full bg-green-100 rounded-md flex justify-center items-center gap-1 hover:bg-green-200">
              <BsApple className="text-xl" />
              <div className="text-xl font-semibold">Pay</div>
            </button>
            <div>
              <div></div>
              <p className="text-center my-4 text-[#909090]">
                Or pay with card
              </p>
            </div>

            <div className="text-[#909090] my-2">Gift Card/ Discount code</div>
            <div className="flex justify-between mb-5">
              <input
                type="text"
                className="bg-[#E2E8F0] h-10 rounded-md w-64 outline-none p-1"
              />
              <button className="h-10 w-24  text-[#3182CE] border-[#3182CE] border-2 rounded-md">
                Apply
              </button>
            </div>
            <div className="flex justify-between text-sm my-3">
              <p className="text-[#3F4255]">Sub Total</p>
              <p className=" text-[#909090]">₹500</p>
            </div>
            <div className="flex justify-between text-sm my-3">
              <p className="text-[#3F4255]">Shipping</p>
              <p className=" text-[#909090]">₹41</p>
            </div>
            <div className="flex justify-between text-md my-3">
              <p className="text-[#3F4255] font-semibold">Total</p>
              <p className=" text-[#909090] font-semibold">₹541</p>
            </div>
            <button className="h-12 w-full bg-black rounded-md text-white flex justify-center items-center text-xl font-semibold mt-5 hover:bg-slate-400 hover:text-black">
              Pay ₹541
            </button>
          </div>
        )}
      </div>
      {cartItems.length == 0 && (
        <div className="flex w-full justify-center mb-48">
          <img src={cart} alt="" className="w-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
