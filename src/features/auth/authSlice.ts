import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { login, refreshToken } from "./actions";
import Cookies from "js-cookie";

// INTERFACE INITIAL STATE VALUE
interface InitialState {
  data: { accessToken: string | undefined };
  isLoading: boolean;
  isError: boolean;
  errorResponse: any | null;
}

// INITIAL STATE
const initialStateValue: InitialState = {
  data: { accessToken: undefined },
  isLoading: false,
  isError: false,
  errorResponse: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateValue,
  reducers: {
    rehydrateToken: (state) => {
      const accessCookie = Cookies.get("mnut");

      if (!accessCookie) return;
      state.data = { accessToken: accessCookie };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action: PayloadAction<unknown>) => {
        state.isError = true;
        state.isLoading = false;
        state.errorResponse = action.payload;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ accessToken: string }>) => {
          state.isError = false;
          state.isLoading = false;
          state.errorResponse = "";
          state.data = { accessToken: action.payload.accessToken };
        }
      )
      .addCase(refreshToken.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(
        refreshToken.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isError = true;
          state.isLoading = false;
          state.errorResponse = action.payload;
        }
      )
      .addCase(
        refreshToken.fulfilled,
        (state, action: PayloadAction<{ accessToken: string }>) => {
          state.isError = false;
          state.isLoading = false;
          state.errorResponse = "";
          state.data = { accessToken: action.payload.accessToken };
        }
      );
  },
});

export const { rehydrateToken } = authSlice.actions;
export const SelectAuthSlice = (state: RootState) => state.auth;
export default authSlice.reducer;
