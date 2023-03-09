import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: []
}

const updateData = (state) => {
  // обновление цены
  state.totalPrice = state.items.reduce((sum, obj)=>{
    return obj.price * obj.count + sum
  }, 0)
  // обновление количества продуктов
  state.totalCount = state.items.reduce((sum, obj)=>{
    return obj.count + sum
  }, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj)=>obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      updateData(state);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj)=>obj.id === action.payload);
      if(findItem){findItem.count--;}
      updateData(state);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj)=>obj.id !== action.payload)
      updateData(state);
    }, 
    clearItems(state) {
      state.items = [];
    }, 
  }
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;