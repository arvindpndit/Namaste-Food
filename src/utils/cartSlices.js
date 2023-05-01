import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // i have to write the action dispatched by the + button and the reducer function it will called
    //so basically this reducers object contains actions their corresponding reducers functions
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

//time to export all the reducers and actions
export default cartSlice.reducer;
export const { addItem, clearCart, removeItem } = cartSlice.actions;
