import { RootState } from './../store';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type slice
import { SearchPizzaParams, Status, PizzaType, PizzaSliceState,} from './sliceTypes';
import axios from "axios";

// createAsyncThunk заменяет стандартный рекомендуемый подход для обработки жизненных циклов асинхронных запросов.
// таких как pending, fulfilled, rejected
export const getPizzas = createAsyncThunk<PizzaType[], SearchPizzaParams>(
  "pizza/getPizzasStatus",
  async (params) => {
    const { category, sortBy, order, search, currentPage } = params;
    const { data } = await axios.get<PizzaType[]>(
      search
        ? `https://63fe042bcd13ced3d7c47f84.mockapi.io/items?order=${order}&search=${search}`
        : `https://63fe042bcd13ced3d7c47f84.mockapi.io/items?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}`
    );
    if(data.length === 0){ throw new Error("Zero elems") }
    return data;
  }
);

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPizzas.pending, (state) => {
        console.log(Status.LOADING);
        state.items = [];
        state.status = Status.LOADING;
      })
      .addCase(getPizzas.fulfilled, (state, action) => {
        console.log(Status.SUCCESS);
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(getPizzas.rejected, (state) => {
        console.log(Status.ERROR);
        state.items = [];
        state.status = Status.ERROR;
      });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;
export const selectPizzaStatus = (state: RootState) => state.pizza.status;

export const { setItems } = pizzaSlice.actions; //  { setItems, status } 
export default pizzaSlice.reducer;
