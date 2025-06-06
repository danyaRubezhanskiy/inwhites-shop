import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productSlice";

import reviewsSlice from "./Slices/reviewSlice";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsSlice,
    cart: cartSlice,
  },
});

export default store;
