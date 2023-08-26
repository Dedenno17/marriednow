import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CategoryResponse } from "@/types";
import { getAllCategory } from "./actions/index";

// INTERFACE INITIAL STATE VALUE
interface InitialState {
  data: null | CategoryResponse;
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

export const categorySlice = createSlice({
  name: "category",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getAllCategory.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isError = true;
          state.isLoading = false;
          state.errorResponse = action.payload;
        }
      )
      .addCase(
        getAllCategory.fulfilled,
        (state, action: PayloadAction<CategoryResponse>) => {
          state.isLoading = false;
          state.isError = false;
          state.errorResponse = "";
          state.data = action.payload;
        }
      );
  },
});

export const SelectCategorySlice = (state: RootState) => state.category;
export default categorySlice.reducer;
