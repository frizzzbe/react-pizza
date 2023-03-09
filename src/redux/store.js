import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slices/filterSlice";
import cartSlice from "./Slices/cartSlice";
import pizzaSlice from "./Slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
});
