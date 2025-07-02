import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  user: null,
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const axios = Axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post("/auth/login", formData);
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post("/users", formData);
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
