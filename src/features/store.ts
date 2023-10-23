import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

// REDUCERS
import authSliceReducer from './auth/authSlice';
import userSliceReducer from './user/userSlice';
import themeReducer from './theme/themeSlice';
import categoryReducer from './category/categorySlice';
import coupleReducer from './couples/coupleSlice';

// COMBINED ALL REDUCERS
const reducers = combineReducers({
  auth: authSliceReducer,
  category: categoryReducer,
  couples: coupleReducer,
  user: userSliceReducer,
  theme: themeReducer,
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
