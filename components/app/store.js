import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../Features/auth/authSlice";
import {
  loadTokenFromSecureStore,
  saveTokenToSecureStore,
} from "./Middleware/localStore";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, saveTokenToSecureStore),
  devTools: true,
});
loadTokenFromSecureStore(store.dispatch);
