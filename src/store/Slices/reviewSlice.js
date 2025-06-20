import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reviews from "../reviews";
import productReviews from "../../components/ProductReviews/productReviews";

const initialState = {
  items: [],
  productReviews: [],
  loading: false,
  error: null,
};

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return reviews;
  }
);

export const getProductReviews = createAsyncThunk(
  "reviews/getProductReviews",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return productReviews;
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProductReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productReviews = action.payload;
      })
      .addCase(getProductReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default reviewsSlice.reducer;
