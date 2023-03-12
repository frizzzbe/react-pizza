import { useDispatch } from 'react-redux';
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

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()