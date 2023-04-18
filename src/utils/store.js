import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cartSlices";

const store = configureStore({
  //the store contains slices
  reducer: {
    //name of the slice and the slice itself
    cart: cartSlices,
  },
});

export default store;
