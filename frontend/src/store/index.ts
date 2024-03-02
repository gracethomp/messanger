import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./slices/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
