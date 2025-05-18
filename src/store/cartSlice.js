import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromeCart(state, action) {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
