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

const setAuthHeaders = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post("/auth/login", formData);
      setAuthHeaders(data.token);
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
      await axios.post("/users", formData);
      const { data: loginData } = await axios.post("/auth/login", {
        username: formData.username,
        password: formData.password,
      });
      return {
        user: {
          username: formData.username,
          email: formData.email,
        },
        token: loginData.token,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/users");
      console.log("users:", data);
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
  extraReducers: (builder) => {
    builder
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiRegister.rejected, (state, action) => {
        console.error("Registration error:", action.payload);
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiLogin.rejected, (state, action) => {
        console.error("Registration error:", action.payload);
      });
  },
});

export default authSlice.reducer;
