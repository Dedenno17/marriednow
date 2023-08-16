import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";

// REDUCERS
import authSliceReducer from "./auth/authSlice";
import userSliceReducer from "./user/userSlice";

// COMBINED ALL REDUCERS
const reducers = combineReducers({
  auth: authSliceReducer,
  user: userSliceReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
