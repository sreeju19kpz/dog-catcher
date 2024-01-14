import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../Features/auth/authSlice";
import {
  loadTokenFromSecureStore,
  saveTokenToSecureStore,
} from "./Middleware/localStore";
const serializable = createSerializableStateInvariantMiddleware({
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
});
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: [serializable, apiSlice.middleware, saveTokenToSecureStore],
  devTools: true,
});
loadTokenFromSecureStore(store.dispatch);
