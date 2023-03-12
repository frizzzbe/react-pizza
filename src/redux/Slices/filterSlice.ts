import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface FilterSliceState {
  categoryId: number;
  sort: number;
  searchValue: string;
  currentPage: number;
}

export const initialState: FilterSliceState = {
  categoryId: 0,
  sort: 0,
  searchValue: '',
  currentPage: 1
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    }, 
    setSearchValue(state, action) {
      state.searchValue = action.payload
    }, 
    setSort(state, action) {
      state.sort = action.payload
    }, 
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    }, 
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId)
      state.currentPage = Number(action.payload.currentPage)
      state.sort = Number(action.payload.sort)
    }, 
  }
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;