import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAllTheme } from "./actions";
import { ThemeResponse } from "@/types";

// INTERFACE INITIAL STATE VALUE
interface InitialState {
  data: null | ThemeResponse;
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

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTheme.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getAllTheme.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isError = true;
          state.isLoading = false;
          state.errorResponse = action.payload;
        }
      )
      .addCase(
        getAllTheme.fulfilled,
        (state, action: PayloadAction<ThemeResponse>) => {
          state.isLoading = false;
          state.isError = false;
          state.errorResponse = "";
          state.data = action.payload;
        }
      );
  },
});

export const SelectThemeSlice = (state: RootState) => state.theme;
export default themeSlice.reducer;
