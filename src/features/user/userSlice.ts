import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { userProfile } from "./actions";
import { User } from "@/types";

// INTERFACE INITIAL STATE VALUE
interface InitialState {
  data: null | User;
  isLoading: boolean;
  isError: boolean;
  errorResponse: any | null;
}

// INITIAL STATE
const initialStateValue: InitialState = {
  data: null,
  isLoading: false,
  isError: false,
  errorResponse: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        userProfile.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isError = true;
          state.isLoading = false;
          state.errorResponse = action.payload;
        }
      )
      .addCase(
        userProfile.fulfilled,
        (state, action: PayloadAction<User | any>) => {
          state.isLoading = false;
          state.isError = false;
          state.errorResponse = "";
          state.data = action.payload;
        }
      );
  },
});

export const SelectUserSlice = (state: RootState) => state.user;
export default userSlice.reducer;
