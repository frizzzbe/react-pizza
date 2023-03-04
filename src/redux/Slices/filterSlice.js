import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0, // начальное состояние = 0
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    increment15: (state) => {
      state.count += 15;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, increment15 } = filterSlice.actions;
//  filterSlice.actions вернет все методы (действия) объекта filterSlice
export default filterSlice.reducer;
// отвечает за изменения state у reducer
