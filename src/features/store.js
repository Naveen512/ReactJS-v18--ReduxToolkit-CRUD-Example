import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./cars/carslice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
