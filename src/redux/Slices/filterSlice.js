import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: 0,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      // данный метод получает в параметры sate
      // и action который хранит в себе данные из переданных параметров
      state.categoryId = action.payload
    }, 
    setSort(state, action) {
      // данный метод получает в параметры sate
      // и action который хранит в себе данные из переданных параметров
      state.sort = action.payload
    }, 
  }
});

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;