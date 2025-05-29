import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productSlice";

import reviewsSlice from "./Slices/reviewSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsSlice,
  },
});

export default store;
