import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCoupleById, createCouple, uploadImageCouple } from './actions';
import { coupleResponse } from '@/types';

// INTERFACE INITIAL STATE VALUE
interface InitialState {
  data: coupleResponse[] | null;
  selectedCouple: coupleResponse | null;
  imageCouple: string[] | null;
  selectedImage: string[];
  isLoading: boolean;
  isError: boolean;
  errorResponse: any | null;
}

// INITIAL STATE
const initialStateValue: InitialState = {
  data: null,
  selectedCouple: null,
  imageCouple: [],
  selectedImage: [],
  isLoading: false,
  isError: false,
  errorResponse: null,
};

export const couplesSlice = createSlice({
  name: 'couples',
  initialState: initialStateValue,
  reducers: {
    resetImageUploaded: (state) => {
      state.imageCouple = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoupleById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getCoupleById.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isError = true;
          state.isLoading = false;
          state.errorResponse = action.payload;
        },
      )
      .addCase(
        getCoupleById.fulfilled,
        (state, action: PayloadAction<coupleResponse>) => {
          state.isLoading = false;
          state.isError = false;
          state.errorResponse = '';
          state.selectedCouple = action.payload;
        },
      )
      .addCase(createCouple.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        createCouple.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isError = true;
          state.isLoading = false;
          state.errorResponse = action.payload;
        },
      )
      .addCase(createCouple.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.errorResponse = '';
        state.data = action.payload;
      })
      .addCase(uploadImageCouple.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        uploadImageCouple.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isError = true;
          state.isLoading = false;
          state.errorResponse = action.payload;
        },
      )
      .addCase(
        uploadImageCouple.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = false;
          state.errorResponse = '';

          if (!state.imageCouple?.length) {
            state.imageCouple = [action.payload.file];
            return;
          }

          if (state.imageCouple) {
            state.imageCouple = [...state.imageCouple, action.payload.file];
            return;
          }
        },
      );
  },
});

export const { resetImageUploaded } = couplesSlice.actions;
export const SelectCouplesSlice = (state: RootState) => state.couples;
export default couplesSlice.reducer;
