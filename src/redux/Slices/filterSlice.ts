import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FilterSliceType } from './sliceTypes';

export const initialState: FilterSliceType = {
  category: 0,
  sortBy: 0,
  search: '',
  currentPage: 1
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.category = action.payload
    }, 
    setSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload
    }, 
    setSort(state, action: PayloadAction<number>) {
      state.sortBy = action.payload
    }, 
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    }, 
    setFilters(state, action: PayloadAction<FilterSliceType>) {
      state.category = Number(action.payload.category)
      state.currentPage = Number(action.payload.currentPage)
      state.sortBy = Number(action.payload.sortBy)
    }, 
  }
});

export const selectFilter = (state: RootState) => state.filter;
// export const selectSort = (state: RootState) => state.filter.sortBy;

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;