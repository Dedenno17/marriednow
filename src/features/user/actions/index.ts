import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "@/types";

// BASE URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// GET PROFILE USER
export const userProfile = createAsyncThunk<User, string>(
  "user/userProfile",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${payload}`,
        },
      });

      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
