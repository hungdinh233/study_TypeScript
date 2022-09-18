import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./reducers/productReducers";

export const store = configureStore({
  reducer: {
    productReducers: productReducers
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch