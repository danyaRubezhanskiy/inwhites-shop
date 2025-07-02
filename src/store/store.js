import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productSlice";

import reviewsSlice from "./Slices/reviewSlice";
import cartSlice from "./Slices/cartSlice";
import authSlice from "./Slices/authSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsSlice,
    cart: cartSlice,
    auth: authSlice,
  },
});

export default store;
