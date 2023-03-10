import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk заменяет стандартный рекомендуемый подход для обработки жизненных циклов асинхронных запросов.
// таких как pending, fulfilled, rejected
export const getPizzas = createAsyncThunk(
  "pizza/getPizzasStatus",
  async (params) => {
    const { category, sortBy, order, search, currentPage } = params;
    const { data } = await axios.get(
      search
        ? `https://63fe042bcd13ced3d7c47f84.mockapi.io/items?order=${order}&search=${search}`
        : `https://63fe042bcd13ced3d7c47f84.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading", // loading | success | error
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
        console.log("loading");
        state.items = [];
        state.status = "loading";
      })
      .addCase(getPizzas.fulfilled, (state, action) => {
        console.log("success");
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(getPizzas.rejected, (state) => {
        console.log("error");
        state.items = [];
        state.status = "error";
      });
  },
});

export const selectPizzaData = (state) => state.pizza;

export const { setItems, status } = pizzaSlice.actions;
export default pizzaSlice.reducer;
