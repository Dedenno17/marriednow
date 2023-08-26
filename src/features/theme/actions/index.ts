import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/features/store";
import axios from "axios";

// BASE URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// GET ALL THEME
export const getAllTheme = createAsyncThunk<any, number, { state: RootState }>(
  "theme/getAllTheme",
  async (page, thunkAPI) => {
    const accessToken = thunkAPI.getState().auth.data?.accessToken;

    try {
      const response = await axios.get(
        `${BASE_URL}/theme?page=${page}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.data;
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
