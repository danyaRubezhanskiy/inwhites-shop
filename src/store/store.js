import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
