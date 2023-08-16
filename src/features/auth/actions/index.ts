import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// BASE URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// INTERFACE LOGIN PAYLOAD
interface LoginPayload {
  username: string;
  password: string;
}

// LOGIN
export const login = createAsyncThunk<{ accessToken: string }, LoginPayload>(
  "auth/login",
  async (payload, thunkApi) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        { ...payload },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = await response.data;

      // set expire to 15 minutes
      const expireTime = new Date(new Date().getTime() + 15 * 60 * 1000);

      // set access token to cookie
      Cookies.set("mnut", data.accessToken, {
        expires: expireTime,
        path: "",
        sameSite: "strict",
      });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
