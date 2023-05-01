import { configureStore } from "@reduxjs/toolkit";
import indicadorReducer from "./indicadorSlice";

export const store = configureStore({
  reducer: indicadorReducer,
});
