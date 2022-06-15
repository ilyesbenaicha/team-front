import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from "./reducers/AuthReducer";
const rootReducer = combineReducers({
  authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});