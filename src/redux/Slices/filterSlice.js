import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: 0,
}

const filterSlice = createSlice({
  
});


// const initialState = {
//   count: 0, // начальное состояние = 0
//   // initial state может быть и простым значением не обязательно объектом
//   // const initialState = 0
//   // тогда обращение к нему можно сократить до 
//   // reducers: {
//   //   increment: (state) => state + 1,
//   // },
// };

// export const filterSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//     // incrementByAmount: (state, action) => {
//     //   state.count += action.payload;
//     // },
//   },
// });

// export const { increment, decrement, incrementByAmount } = filterSlice.actions;
// //  filterSlice.actions вернет все методы (действия) объекта filterSlice
// export default filterSlice.reducer;
// // отвечает за изменения state у reducer
