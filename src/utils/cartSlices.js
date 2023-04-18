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
    removeItem: (state) => {
      //let newArray = studentArr.map((item) => ({ name: item.name, age: item.age }));
      state.items.map((item) => item.info.id !== id);
    },
  },
});

//time to export all the reducers and actions
export default cartSlice.reducer;
export const { addItem, clearCart, removeItem } = cartSlice.actions;
