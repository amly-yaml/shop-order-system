import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import orderReducer from "./orderSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    order: orderReducer,
  },
});
