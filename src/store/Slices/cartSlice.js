import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item, index) => index !== action.payload
      );
    },
    changeItemQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      state.items[index].quantity = quantity;
    },
  },
});

export const { addToCart, removeFromCart, changeItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
