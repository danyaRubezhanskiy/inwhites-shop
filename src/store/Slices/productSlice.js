import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  items: [],
  topSelling: [],
  singleProduct: [],
  loading: false,
  error: null,
};

const axios = Axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/products");
    
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTopSelling = createAsyncThunk(
  "products/getTopSelling",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/products");
      const sortedData = data.sort((a, b) => b.rating.rate - a.rating.rate);
      return sortedData.slice(0, 8);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get(`/products/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTopSelling.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopSelling.fulfilled, (state, action) => {
        state.loading = false;
        state.topSelling = action.payload;
        state.error = null;
      })
      .addCase(getTopSelling.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
        state.error = null;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default productsSlice.reducer;
