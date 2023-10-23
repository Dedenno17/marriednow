import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/features/store';
import axios from 'axios';
import { CoupleData } from '@/types';

// BASE URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// GET COUPLE BY ID
export const getCoupleById = createAsyncThunk<
  any,
  string,
  { state: RootState }
>('couples/getCoupleById', async (id, thunkAPI) => {
  const accessToken = thunkAPI.getState().auth.data?.accessToken;

  try {
    const response = await axios.get(`${BASE_URL}/couple/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.data;
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

// CREATE COUPLE
export const createCouple = createAsyncThunk<
  any,
  CoupleData,
  { state: RootState }
>('couples/createCouple', async (payload, thunkAPI) => {
  const accessToken = thunkAPI.getState().auth.data?.accessToken;

  try {
    const response = await axios.post(
      `${BASE_URL}/couple`,
      { ...payload },
      {
        headers: {
          'Content-Type': 'application/json ; charset=UTF-8',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const data = await response.data;
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

// UPLOAD IMAGE COUPLE
export const uploadImageCouple = createAsyncThunk<
  any,
  { file: File },
  { state: RootState }
>('couples/uploadImageCouple', async (payload, thunkAPI) => {
  const accessToken = thunkAPI.getState().auth.data?.accessToken;

  try {
    const response = await axios.post(
      `${BASE_URL}/upload`,
      { ...payload },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const data = await response.data;
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
